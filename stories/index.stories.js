import React from 'react'
import { Ripple, Ellipsis, Ring } from '../src'
export default { title: 'Spinners' }

export const ripple = () => React.createElement(Ripple)

export const ellipsis = () => <Ellipsis />

export const ring = () => <Ring />
