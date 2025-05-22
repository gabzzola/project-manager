import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import './ProjectForm.module.css';

function ProjectForm() {
  return (
    <form autoComplete="off">
      <Input 
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />

      <Input 
        type="number"
        step="0.01"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento para o projeto"
      />

      <SubmitButton text="Criar Projeto" />
    </form>
  );
}

export default ProjectForm;
