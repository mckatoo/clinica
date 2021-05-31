module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials','@storybook/addon-postcss'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  babel: async (options) => {
    const { plugins = [] } = options
    return {
      ...options,
      plugins: [
        ...plugins,
        [
          require.resolve('@babel/plugin-proposal-private-property-in-object'),
          { loose: true },
        ],
      ]
    }
  },
}
