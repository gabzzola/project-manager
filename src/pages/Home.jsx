import LinkButton from '../layouts/LinkButton.jsx';
import logo from '../assets/images/home.png';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.containerHome}>
      <h1>Bem-vindo ao <span>Gerenciador de Projetos</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="CRIAR NOVO PROJETO" />
      <img src={logo} alt="Gerencie seus projetos!" />
    </section>
  );
}

export default Home;
