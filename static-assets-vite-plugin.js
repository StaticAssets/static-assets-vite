function staticAssets() {
    return {
        name: 'static-assets',
        config: () => {
            // ignore this config if this is not being built by StaticAssets
            if (! process.env.STATIC_ASSETS_BUILD) {
                return {};
            }

            return {
                // update all static URLs to use the CDN
                base: process.env.STATIC_ASSETS_URL,
                experimental: {
                    renderBuiltUrl(filename) {
                        // https://vitejs.dev/guide/build.html#advanced-base-options
                        // replace all dynamic imports to use the CDN

                        return `${process.env.STATIC_ASSETS_URL}/${filename}`;
                    }
                }
            };
        },
    };
}

module.exports = staticAssets;
