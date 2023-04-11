import React from 'react'
import { useGlobalContext } from '../context/context'
const NoMatch = () => {
  const {text} = useGlobalContext();
  return (
    <p className='mt-20 text-4xl text-center capitalize h-screen'>
        {`No search  result for '${text.toLowerCase()}'`}; 
    </p>
  )
}

export default NoMatch