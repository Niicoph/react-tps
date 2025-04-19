import React from 'react'
import Styles from './Select.module.css'

export default function Select({title, options , handleFilterChange}) {
  return (
    <select className={`background ${Styles.selectBox}`} onChange={handleFilterChange}>
        <option value="">{title}</option>
        {
            options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))
        }
    </select>
  )
}
