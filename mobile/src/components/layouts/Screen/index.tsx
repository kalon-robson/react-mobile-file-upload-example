import React from 'react';
import { SafeAreaView, ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { ScreenStyles } from './styles';

interface Props {
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
  statusBarStyle?: 'light' | 'dark'
  noSpacings?: boolean
}

export const Screen: React.FC<Props> = ({ style, children, statusBarStyle = 'dark', noSpacings }) => {
  const { statusBarHeight } = Constants;
  const styles = ScreenStyles;
  return (
    <React.Fragment>
      <StatusBar style={statusBarStyle} />
      <SafeAreaView style={[styles.screen]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[styles.view, style, { paddingTop: noSpacings ? 0 : statusBarHeight }]}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};
