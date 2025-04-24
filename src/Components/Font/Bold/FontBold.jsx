import Styles from './FontBold.module.css';
//Linda forma de estructurar las fuentes, me gusto
export default function FontBold({text}) {
  return (
      <p className={`${Styles.fontBold} paragraph inter-bold`}>
          {text}
      </p>
  )
}
