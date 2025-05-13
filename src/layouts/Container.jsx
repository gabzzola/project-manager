import sharedStyles from './SharedStyles.module.css';

function Container({ children }) {
  return (
    <div className={sharedStyles.container}>
      { children }
    </div>    
  );
}

export default Container;
