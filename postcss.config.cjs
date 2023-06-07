/* eslint-disable @typescript-eslint/no-var-requires */
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

const config = {
    plugins: [
        postcssPresetEnv({
            stage: 3,
            features: {
                'nesting-rules': true,
                'custom-media-queries': true,
                'media-query-ranges': true,
            }
        }),
        autoprefixer()
    ]
};

module.exports = config;