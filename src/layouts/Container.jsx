import styles from './Container.module.css';
import sharedStyles from './SharedStyles.module.css';

function Container({ children }) {
  return (
    <div className={`${sharedStyles.container} ${styles.justifySpaceBetween}`}>
      { children }
    </div>    
  );
}

export default Container;
