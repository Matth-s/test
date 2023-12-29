import { useState } from 'react';
import FormContainer from '../../components/containers/form-container/FormContainer';
import CreateUserForm from '../../components/forms/auth/create-user-form/CreateUserForm';
import LoginUserForm from '../../components/forms/auth/login-user-form/LoginUserForm';

const AuthPage = () => {
  const [longin, setLogin] = useState(false);

  return (
    <div>
      <p onClick={() => setLogin((prev) => !prev)}>
        dbedbedbeadbuiea
      </p>
      <FormContainer>
        {longin ? <LoginUserForm /> : <CreateUserForm />}
      </FormContainer>
    </div>
  );
};

export default AuthPage;
