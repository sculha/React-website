import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Subbanner from '../components/Subbanner'

const Contact = () => {
  return (
    <>
      <Breadcrumb />
      <Subbanner title="Contact"/>
      <div className='page-content'>
        <div className='container-fluid'>
        <h2 className="title title-sm color-blue">What is Lorem Ipsum? <br /><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact
