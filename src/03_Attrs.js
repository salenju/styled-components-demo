import React from 'react'
import styled from 'styled-components'

class Attrs extends React.Component {

  render() {
    return (
      <div className='app-attrs'>
        <PasswordInput name='pass1' />
        <PasswordInput name='pass2' size='1em' />
      </div>
    )
  }
}

const PasswordInput = styled.input.attrs({
  type: 'password',
  padding: props => props.size || '0.5em',
  margin: props => props.size || '0.5em',
})`
  border: 2px solid #DEDEDE;
  border-radius: 5px;
  color: #4A4A4A;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

export default Attrs