import { loadEnv } from "vite";

export default function staticAssets() {
    process.env = {...process.env, ...loadEnv(null, process.cwd())};

    return {
        name: 'static-assets',
        configResolved(config) {
            if (process.env.STATIC_ASSETS_BUILD) {
                config.base = process.env.STATIC_ASSETS_URL;
            }
        }
    }
}

