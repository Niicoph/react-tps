import React from 'react'
import Styles from './Button.module.css'

export default function Button({ title, type, onClick }) {
    if (type == "") type = "default";

    //Lindo uso del type aca!
  return (
      <div>
         <button className={`${Styles.button} ${Styles[type]}`} onClick={onClick}> {title} </button>
      </div>
  );
}
