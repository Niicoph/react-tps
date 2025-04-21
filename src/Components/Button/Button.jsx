import React from 'react'
import Styles from './Button.module.css'

export default function Button({ title, type, onClick }) {
    if (type == "") type = "default";

  return (
      <div>
         <button className={`${Styles.button} ${Styles[type]}`} onClick={onClick}> {title} </button>
      </div>
  );
}
