import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../store/store';
import { logInService } from '../../../../services/auth-service';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

const LoginUserForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    values: {
      email: '',
      password: '',
    },
  });

  const processForm = async (credentials: any) => {
    await dispatch(logInService({ credentials }))
      .unwrap()
      .then((res) => {
        if (res.status === 201) {
          navigate('/feedbacks');
        }
      });
  };

  return (
    <div className="login-user-form form-radius">
      <form onSubmit={handleSubmit(processForm)}>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email')} />

          {errors.email?.message && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form-div">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
          />

          {errors.password?.message && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <input type="submit" className="purple" value="LogIn" />
      </form>
    </div>
  );
};

export default LoginUserForm;
