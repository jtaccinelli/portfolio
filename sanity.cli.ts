import path from 'path'
import {defineCliConfig} from 'sanity/cli'

import config from './tsconfig.json'

const {paths} = config.compilerOptions

export default defineCliConfig({
  api: {
    projectId: '10uz7hfe',
    dataset: 'production',
  },
  vite: (config) => {
    if (!config.resolve) config.resolve = {}
    if (!config.resolve.alias) config.resolve.alias = {}

    Object.keys(paths).forEach((key) => {
      const alias = key as keyof typeof paths
      const routes = paths[alias]

      routes.forEach((route) => {
        config.resolve.alias[alias.replace('/*', '')] = path.resolve(
          __dirname,
          route.replace('/*', '')
        )
      })
    })

    return config
  },
})
