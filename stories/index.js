import React from 'react'
import { storiesOf } from '@storybook/react'

import { Basic, Props, Attrs, Extend, Animation } from '../src'

storiesOf('Demos', module)
  .add('基本用法', () => <Basic />)
  .add('Props用法', () => <Props />)
  .add('Attrs-属性', () => <Attrs />)
  .add('Extend-继承', () => <Extend />)
  .add('Animation-动画', () => <Animation />)