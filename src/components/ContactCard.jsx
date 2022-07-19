import React from 'react'

function ContactCard(props) {
  const {id,name,email}=props.contact;
  return (
      <div className='item'>
        <div className='content'>
          <div className='header'>{name}</div>
          <div className=''>{email}</div>
        </div>
        <i className='trash alternate outline icon'>dlt</i>
      </div>  )
}

export default ContactCard