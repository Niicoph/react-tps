import React from 'react'
import Styles from './MovieContainer.module.css'

export default function MovieContainer({children}) {
  return (
    <div className={Styles.movieContainer}>
        {children}
    </div>
  )
}
