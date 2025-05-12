import { Link } from 'react-router-dom';

function Navbar() {
  const navigation = [
    { to: "/", text: "Home" },
    { to: "/newproject", text: "Novo Projeto" },
    { to: "/about", text: "Sobre" },
    { to: "/contact", text: "Contato" },
  ];

  return (
    <nav>
      <ul>
        {
          navigation.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
