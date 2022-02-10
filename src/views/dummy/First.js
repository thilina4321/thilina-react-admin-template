import React from 'react'
import { useNavigate } from 'react-router-dom'

const First = () => {
   const na= useNavigate()
  return (
    <div onClick={()=>na('/login')}>First</div>
  )
}

export default First