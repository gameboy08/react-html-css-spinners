// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'

const dist = 'dist'
const bundle = 'bundle'
const production = !process.env.ROLLUP_WATCH
const outputs = [
  {
    file: `${dist}/${bundle}.cjs.js`,
    format: 'cjs'
  },
  {
    file: `${dist}/${bundle}.esm.js`,
    format: 'esm'
  },
  {
    name: 'ReactCssSpinners',
    globals: {
      react: 'React'
    },
    file: `${dist}/${bundle}.umd.js`,
    format: 'umd'
  }
]
const common = {
  input: 'src/index.js',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    production && terser(),
    string({
      // Required to be specified
      include: '**/*.css'
    })
  ],
  external: ['react']
}

export default outputs.map(output => ({
  ...common,
  output
}))
