import { Link } from 'react-router-dom';
import Container from '../layouts/Container';
import Navbar from './Navbar';
import logo from '/favicon.ico';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <Container>
        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="Logo do Gerenciador de Projetos"/>
          <h1>Gerenciador de Projetos</h1>
        </Link>

        <Navbar />
      </Container>
    </header>  
  );
}

export default Header;
