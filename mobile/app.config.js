export default () => ({
  expo: {
    android: {
      adaptiveIcon: {
        backgroundColor: '#ffffff',
        foregroundImage: './assets/adaptive-icon.png',
      },
    },
    assetBundlePatterns: [
      '**/*',
    ],
    extra: {
      API_SERVER_URL: process.env.API_SERVER_URL,
      NODE_ENV: process.env.NODE_ENV,
    },
    icon: './assets/icon.png',
    ios: {
      supportsTablet: true,
    },
    name: 'graphql-mobile-boilerplate',
    orientation: 'portrait',
    slug: 'graphql-mobile-boilerplate',
    splash: {
      backgroundColor: '#ffffff',
      image: './assets/splash.png',
      resizeMode: 'contain',
    },
    userInterfaceStyle: 'light',
    version: '0.0.1',
    web: {
      favicon: './assets/favicon.png',
    },
  },
});
