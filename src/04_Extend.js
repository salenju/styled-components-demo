import React from 'react'
import styled from 'styled-components'

const contacts = [
  { name: 'Salen', gender: 'male', age: 30, introduction: 'developser' },
  { name: 'Halen', gender: 'female', age: 29, introduction: 'tester' },
  { name: 'Lenmon', gender: 'male', age: 27, introduction: 'UI designer' },
]

class Extend extends React.Component {

  renderContact(contact) {
    const ContactComponent = contact.gender === 'female'
      ? ContactFemale
      : ContactMale

    return (
      <ContactComponent gender={contact.gender}>
        <h2 className='contact_name'>{contact.name}</h2>
        <ContactIntro className='contact_intro'>
          {contact.name} is a <strong>{contact.age} years</strong> old <strong>{contact.introduction}</strong>
        </ContactIntro>
      </ContactComponent>
    )
  }

  render() {
    return (
      <div className='app-extend'>
        {
          contacts.map(item => this.renderContact(item))
        }
      </div>
    )
  }
}

const ContactWrapper = styled.div`
  border: 1px solid #DEDEDE;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  color: #FFFFFF;
  h2 {
    font-size: 20px;
    margin-top: 0;
  }
`

const ContactIntro = styled('p')`
  font-size: 16px;
  margin-bottom: 0;
  strong {
    font-weight: 600;
  }
`
// 样式继承
const ContactMale = styled(ContactWrapper)`
  background-color: green;
`
const ContactFemale = styled(ContactWrapper)`
  background-color: tomato;
`

export default Extend