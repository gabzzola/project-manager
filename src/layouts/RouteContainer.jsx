import styles from './RouteContainer.module.css';
import sharedStyles from './SharedStyles.module.css';
import { Outlet } from 'react-router-dom';

function RouteContainer() {
  return (
    <div className={`${sharedStyles.container} ${styles.justifyCenter} ${styles.minHeight}`}>
      <Outlet />
    </div>
  );
}

export default RouteContainer;
