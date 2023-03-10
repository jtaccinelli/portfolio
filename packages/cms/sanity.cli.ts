import path from 'path'
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '10uz7hfe',
    dataset: 'production',
  },
  vite: (config) => {
    config.resolve.alias['@cms'] = path.resolve(__dirname)
    return config
  },
})
