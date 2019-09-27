import { configure, addParameters } from '@storybook/react'
import packageJson from '../package.json'

addParameters({
  options: {
    name: 'React CSS Spinners',
    url: packageJson.repository.url,
    showAddonsPanel: true
  }
})

configure(require.context('../stories', true, /\.stories\.js$/), module)
