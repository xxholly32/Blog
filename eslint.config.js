import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: true,
    vue: true,
  },
  {
    ignores: [
      '*.md',
    ],
  },
)
