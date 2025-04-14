import Container from '../../Components/Container/Container';
import Header from '../../Components/Header/Header'
import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.home}>
        <Header />
        <div className={styles.homeContent}>
        {/* <Container /> */}
        </div>
    </main>
  )
}
