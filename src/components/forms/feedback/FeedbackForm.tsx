import { useState } from 'react';
import { FeedbackSchema } from '../../../schemas/schema';
import { useForm } from 'react-hook-form';
import { FeedbackValidation } from '../../../schemas/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { categories } from '../../../constant/category';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/store';
import { createFeedbackService } from '../../../services/feedback-service';

import iconEdit from '../../../assets/icon-edit-feedback.svg';

import BackButton from '../../buttons/back-button/BackButton.tsx';

import './styles.scss';

type Props = {
  isEditing: boolean;
  title: string;
  formData?: FeedbackSchema;
};

const defaultValuesForm: FeedbackSchema = {
  id: '',
  title: '',
  category: 'Feature',
  upvotes: 0,
  status: 'Suggestion',
  description: '',
};

const FeedbackForm = ({ title, isEditing, formData }: Props) => {
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    values: isEditing ? formData : defaultValuesForm,
    resolver: zodResolver(FeedbackValidation),
  });

  const processForm = async (feedback: FeedbackSchema) => {
    setFormLoading(true);

    if (isEditing) {
      console.log(feedback, 'edit');
    } else {
      feedback.id = uuidv4();
      await dispatch(createFeedbackService({ feedback }))
        .unwrap()
        .then((res) => {
          if (res.status === 201) {
            navigate(`/feedbacks/${feedback.id}`);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setFormLoading(false));
    }
  };

  const handleDelete = () => {
    if (isEditing && formData) {
      console.log(formData.id);
    }
  };

  return (
    <div className="feedback-form-container radius-10">
      <BackButton />
      <div className=" form-content radius-10">
        <img className="icon-form" src={iconEdit} alt="edit" />

        <h1>{title}</h1>

        <form onSubmit={handleSubmit(processForm)}>
          <div
            className={`form-div ${
              errors.title ? 'form-div__error' : ''
            }`}
          >
            <label htmlFor="title">Feedback Title</label>
            <p className="sub-label">
              Add a short, descriptive headline
            </p>
            <input type="text" id="title" {...register('title')} />
            {errors.title?.message && (
              <p className="error-message">{errors.title.message}</p>
            )}
          </div>

          <div className="form-div">
            <label htmlFor="category">Category</label>
            <p className="sub-label">
              Choose a category for your feedback
            </p>

            <select id="category" {...register('category')}>
              {categories.map((categorie) => (
                <option key={categorie} value={categorie}>
                  {categorie}
                </option>
              ))}
            </select>
          </div>

          <div
            className={`form-div ${
              errors.description ? 'form-div__error' : ''
            }`}
          >
            <label htmlFor="description">Feedback Detail</label>
            <p className="sub-label">
              Include any specific comments on what should be
              improved, added, etc.
            </p>
            <textarea id="description" {...register('description')} />
            {errors.description?.message && (
              <p className="error-message">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="div-button flex">
            <button
              type="button"
              className="red"
              onClick={() => handleDelete()}
            >
              Delete
            </button>

            <div className="div-right-part-button flex">
              <button type="button" className="blue">
                Cancel
              </button>

              <input
                type="submit"
                value="Add Feedback"
                className="purple"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
