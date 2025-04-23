import React from 'react'
import Styles from './MediaIconButton.module.css'

export default function MediaIconButton({title, alt, src, onClick}) {
  return (
    <>
        <img
        src={src}
        alt={alt}
        title={title}
        onClick={onClick}
        />
    </>
  )
}
