import React from 'react'

//usual way of using props

// const Child1 = (props) => {
//   return (
//       <div>{props.title}</div>
//   )
// }

const Child1 = ({title}) => {
  return (
      <div>{title}</div>
  )
}

export default Child1