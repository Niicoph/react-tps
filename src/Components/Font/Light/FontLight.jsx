import Styles from './FontLight.module.css';

export default function FontLight({text}) {
  return (
      <p className={`${Styles.fontSize} paragraph inter-light`}>
         {text.toUpperCase()}
      </p>
  )
}
