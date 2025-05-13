import Container from '../layouts/Container';
import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <Container>
        <h1>Header</h1>
        <Navbar />
      </Container>
    </header>  
  );
}

export default Header;
