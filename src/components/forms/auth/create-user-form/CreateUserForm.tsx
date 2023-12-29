import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '../../../../schemas/validation';
import { useAppDispatch } from '../../../../store/store';
import { createUserService } from '../../../../services/auth-service';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

const CreateUserForm = () => {
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
      userName: '',
      image: '',
    },
    resolver: zodResolver(UserValidation),
  });

  const processForm = async (user: any) => {
    await dispatch(createUserService({ user }))
      .unwrap()
      .then((res) => {
        if (res?.status === 201) {
          navigate('/feedbacks');
        }
      });
  };

  return (
    <div className="create-user-form form-radius">
      <form onSubmit={handleSubmit(processForm)}>
        <div
          className={`form-div ${
            errors.email ? 'form-div__error' : ''
          }`}
        >
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email?.message && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div
          className={`form-div ${
            errors.password ? 'form-div__error' : ''
          }`}
        >
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

        <div
          className={`form-div ${
            errors.userName ? 'form-div__error' : ''
          }`}
        >
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            id="userName"
            {...register('userName')}
          />
          {errors.userName?.message && (
            <p className="error-message">{errors.userName.message}</p>
          )}
        </div>

        <input
          type="submit"
          className="purple"
          value="Create account"
        />
      </form>
    </div>
  );
};

export default CreateUserForm;
