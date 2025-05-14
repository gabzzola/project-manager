import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const icons = [
    {
      icon: <FaEnvelope />,
      href: "mailto:gabzzola@gmail.com",
      style: "email"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/gabzzola",
      style: "github"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/gabriel-gazzola-61a051307/",
      style: "linkedin"
    }
  ];

  return (
    <footer>
      <ul className={styles.list}>
        {
          icons.map((item, index) => (
            <li key={index} className={styles[item.style]}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))
        }
      </ul>
      <div>
        <h4 className={styles.title}>Gerenciador de Projetos</h4>
      </div>
    </footer>
  );
}

export default Footer;
