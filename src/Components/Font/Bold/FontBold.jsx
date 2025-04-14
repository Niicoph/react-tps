import Styles from './FontBold.module.css';

export default function FontBold({text}) {
  return (
      <p className={`${Styles.fontBold} paragraph inter-bold`}>
          {text}
      </p>
  )
}
