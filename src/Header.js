import React from 'react'

const header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
//default props
header.defaultProps = {
  title : "Default title"
}

export default header
