import Container from '../../Components/Container/Container';
import Header from '../../Components/Header/Header'
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
         <Header />
         <Container />
    </section>
  )
}
