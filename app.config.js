const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.newdev38.reactnativenotesapp.dev';
  }

  if (IS_PREVIEW) {
    return 'com.newdev38.reactnativenotesapp.preview';
  }

  return 'com.newdev38.reactnativenotesapp';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Notes (Dev)';
  }

  if (IS_PREVIEW) {
    return 'Notes (Preview)';
  }

  return 'Notes';
};

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  slug: "react-native-notes-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/adaptive-icon.png",
  splash: {
    image: "./assets/images/post-it.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier()
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: getUniqueIdentifier()
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/post-it.png",
        imageWidth: 150,
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: "71dee5de-27ab-4f53-9116-03a18028843f"
    }
  },
  owner: "newdev38"
})