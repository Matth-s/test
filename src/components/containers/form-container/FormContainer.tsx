import './styles.scss';

type Props = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return <div className="form-container">{children}</div>;
};

export default FormContainer;
