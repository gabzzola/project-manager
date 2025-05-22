import ProjectForm from '../components/project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.introContainer}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar serviços</p>
      </div>

      <ProjectForm />
    </main>
  );
}

export default NewProject;
