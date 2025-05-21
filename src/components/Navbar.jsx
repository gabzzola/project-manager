import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navigation = [
    { to: "/", text: "Home" },
    { to: "/about", text: "Sobre" },
    { to: "/contact", text: "Contato" },
  ];

  return (
    <nav>
      <ul className={styles.list}>
        {
          navigation.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className={styles.item}>
                { item.text }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
