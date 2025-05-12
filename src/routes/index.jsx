import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewProject from '../pages/NewProject';
import About from '../pages/About';
import Contact from '../pages/Contact';

function AppRoutes() {
  const routes = [
    { path: "/", element: <Home />},
    { path: "/newproject", element: <NewProject />},
    { path: "/about", element: <About />},
    { path: "/contact", element: <Contact />}
  ];
  
  return (
    <Routes>
      {
        routes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))
      };
    </Routes>
  );
}

export default AppRoutes;
