import React from 'react'

const Container = ({children}) => {
    console.log(children);
    return (
      
      <div className='w-[80%] bg-zinc-300 mx-auto my-5 h-24 rounded'>
            {children}
      </div>
  )
}

export default Container