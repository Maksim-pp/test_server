import React from 'react'
import stales from './MyInput.module.css'

export const MyInput = ({...props}) => {
  return (
    <input {...props} className={stales.MyInput}/>
  )
}
