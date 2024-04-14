import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line camelcase
import { useFonts, OpenSans_400Regular, OpenSans_700Bold, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ReactNativeFile } from 'apollo-upload-client';
import { useUploadFileMutation } from './graphql/generated/schema';
import { AppButton, Container, Screen } from './components';
import { ImageInput } from './components/form/ImageInput';
import { sharedFormStyles } from './components/form/sharedStyles';


export const Entry: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  EStyleSheet.build();
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    OpenSans_400Regular,
    // eslint-disable-next-line camelcase
    OpenSans_600SemiBold,
    // eslint-disable-next-line camelcase
    OpenSans_700Bold,
  });
  useEffect(() => {
    setIsReady(true);
  }, []);

  const { control, formState, handleSubmit, reset } = useForm();

  const [uploadFile] = useUploadFileMutation({
    onCompleted: () => {
      reset();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (dat: any) => {
    const file = new ReactNativeFile({
      name: 'image.jpg',
      type: 'image/jpeg',
      uri: dat.image.uri,
    });

    uploadFile({
      variables: {
        file,
      },
    });
  };

  if (!fontsLoaded || !isReady) {
    return null;
  }

  return (
    <Screen>
      <Container>
        <ImageInput
          control={control}
          name="image"
          required
        />
        <AppButton
          onPress={handleSubmit(onSubmit)}
          disabled={!formState.isValid}
          style={sharedFormStyles.button}
        >
          Submit
        </AppButton>
        <AppButton
          onPress={reset}
          type="secondary"
          disabled={!formState.isValid}
          style={sharedFormStyles.button}
        >
          Clear
        </AppButton>
      </Container>
    </Screen>
  );
};
