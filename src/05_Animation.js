import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(359deg);}
`

const RotateBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #f2ecde;
  border: 2px solid #3eede7;
  border-radius: 50%;
  -webkit-animation:  ${spin} 1s linear infinite;
  animation: ${spin} 3s linear infinite;
`

class Animation extends React.Component {

  render() {
    return (
      <RotateBtn className='app-animation'>
        Salen
      </RotateBtn>
    )
  }
}

export default Animation