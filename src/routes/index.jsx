import { Routes, Route } from 'react-router-dom';
import RouteContainer from '../layouts/RouteContainer';
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
      <Route element={<RouteContainer />}>
        {
          routes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))
        }
      </Route>
    </Routes>
  );
}

export default AppRoutes;
