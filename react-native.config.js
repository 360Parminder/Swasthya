// module.exports = {
//   dependencies: {
//     'react-native-vector-icons': {
//       platforms: {
//         ios: null, // Disable auto-linking for iOS if necessary
//       },
//     },
//     'react-native-ionicons': {
//       platforms: {
//         ios: null, // Disable auto-linking for iOS if necessary
//         android: null, // Disable auto-linking for Android if necessary
//       },
//     },
//   },
// };


module.exports = {
  assets: ['./src/assets/fonts'],
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
    'react-native-ionicons': {
      platforms: {
        ios: null, // Disable auto-linking for iOS if necessary
        android: null, // Disable auto-linking for Android if necessary
      },
    },
  },
};