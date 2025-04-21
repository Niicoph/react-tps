import React from 'react'
import Styles from './MediaContainer.module.css'

export default function MediaContainer({children}) {
  return (
    <div className={Styles.mediaContainer}>
        {children}
    </div>
  )
}
