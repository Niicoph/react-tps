import React from 'react'
import Styles from './Title.module.css'

export default function Title({ text, type}) {
    if (!text) type = "No se ingresó un titulo";
    
    switch (type) {
      case "1":
        type = "title1"
        break;
      case "2":
        type = "title2"
        break;
      default:
        type = "title1"
        break;
    }

    const parts = text.split(/<br\s*\/?>/i);
  return (
      <div>
         <h1 className={`${Styles[type]} inter-light`}>
            {parts.map((part, index) => (
            <React.Fragment key={index}>
                {part}
                {index !== parts.length - 1 && <br />}
            </React.Fragment>
            ))}
        </h1>
      </div>
  );
}