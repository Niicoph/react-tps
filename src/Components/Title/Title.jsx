import React from 'react'
import Styles from './Title.module.css'

export default function Title({ text }) {
    if (!text) type = "No se ingresó un titulo";

    const parts = text.split(/<br\s*\/?>/i);
  return (
      <div>
         <h1 className={`${Styles.title} inter-light`}>
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