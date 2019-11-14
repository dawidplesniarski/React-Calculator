// react-native.config.js
module.exports = {
    dependencies: {
        '<react-native-splash-screen>': {
            platforms: {
                android: null, // disable Android platform, other platforms will still autolink
            },
        },
    },
};
