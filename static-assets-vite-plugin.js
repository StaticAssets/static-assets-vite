function staticAssets() {
    return {
        name: 'static-assets',
        configResolved(config) {
            if (process.env.STATIC_ASSETS_BUILD) {
                config.base = process.env.STATIC_ASSETS_URL;
            }
        }
    }
}

module.exports = staticAssets;
