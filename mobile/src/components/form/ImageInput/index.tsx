import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Control, Controller, ControllerProps, useFormState } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { imageInputStyles } from './styles';
import { Label } from '../Label';
import { Error } from '../Error';
import { sharedFormStyles } from '../sharedStyles';
import { Description } from '../Description';
import { AppButton } from '../../AppButton';

type Props = ImagePicker.ImagePickerOptions & {
  control: Control;
  description?: string;
  disabled?: boolean;
  defaultValue?: ImagePicker.ImagePickerAsset | ImagePicker.ImagePickerAsset[];
  label?: string;
  mode?: 'camera' | 'library';
  name: string;
  onChange?: (value: ImagePicker.ImagePickerAsset | ImagePicker.ImagePickerAsset[]) => void;
  required?: boolean;
  rules?: ControllerProps['rules']
  style?: object;
}

export const ImageInput: React.FC<Props> = ({
  control,
  description,
  defaultValue,
  disabled,
  label,
  mode,
  name,
  onChange: onChangeProp,
  required,
  rules,
  style,
  ...rest
}) => {
  const { errors } = useFormState({
    control,
    name: ['errors'],
  });


  const pickImage = async (onChange: (value: ImagePicker.ImagePickerAsset | ImagePicker.ImagePickerAsset[]) => void) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      ...rest,
    });

    if (!result.canceled) {
      if (result.assets.length > 1) {
        onChange(result.assets.map((asset) => asset));
        return;
      }
      onChange(result.assets[0]);
    }
  };

  const takeImage = async (onChange: (value: ImagePicker.ImagePickerAsset | ImagePicker.ImagePickerAsset[]) => void) => {
    const result = await ImagePicker.launchCameraAsync({
      aspect: [4, 3],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      ...rest,
    });

    if (!result.canceled) {
      if (result.assets.length > 1) {
        onChange(result.assets.map((asset) => asset));
        return;
      }
      onChange(result.assets[0]);
    }
  };

  const styles = imageInputStyles;

  return (
    <View style={sharedFormStyles.container}>
      {
        label && (
          <Label
            label={label}
            required={required}
          />
        )
      }
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          required: required && {
            message: `${label} is required`,
            value: Boolean(required),
          },
          ...rules,
        }}
        render={({ field: { onChange, value } }) => (
          <View>
            {
              !value && (
                <View style={styles.buttonsContainer}>
                  {
                    mode !== 'camera' && (
                      <AppButton
                        type="secondary"
                        onPress={() => pickImage(onChangeProp || onChange)}
                        style={[styles.fileUploadButton, style]}
                        disabled={disabled}
                      >
                        Library
                      </AppButton>
                    )
                  }
                  {
                    mode !== 'library' && (
                      <AppButton
                        type="secondary"
                        style={[styles.cameraButton, style]}
                        onPress={() => takeImage(onChangeProp || onChange)}
                        disabled={disabled}
                      >
                        Camera
                      </AppButton>
                    )
                  }

                </View>
              )
            }
            {Array.isArray(value) ? (
              <View>
                <FlatList
                  style={styles.multipleImagesContainer}
                  data={value}
                  horizontal
                  keyExtractor={(item) => item.uri}
                  overScrollMode="never"
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        const newValue = [...value];
                        newValue.splice(newValue.indexOf(item), 1);
                        if (newValue.length === 0) {
                          onChange(null);
                        } else {
                          onChange(newValue);
                        }
                      }}
                      style={{ flex: 1 }}
                      disabled={disabled}
                    >
                      <Image
                        source={{ uri: item.uri }}
                        style={styles.multipleImage}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
            ) : (
              value && (
                <TouchableOpacity
                  onPress={() => onChange(null)}
                  disabled={disabled}
                >
                  <Image
                    source={{ uri: value.uri }}
                    style={{ height: 200, width: '100%' }}
                  />
                </TouchableOpacity>
              )
            )}
          </View>
        )}
      />
      {
        (errors[name]?.message) ? (
          <Error message={errors[name]?.message as string} />
        ) : null
      }
      {
        description && (
          <Description
            description={description}
          />
        )
      }
    </View>
  );
};
