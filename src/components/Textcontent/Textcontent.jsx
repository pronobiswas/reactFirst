import React from 'react'
import './Testcontent.css'

const Textcontent = ({className,title}) => {
    
  return (
    <>
    <div className={className}>
        {title}
    </div>
    </>
  )
}

export default Textcontent
