import { NavLink, useNavigate } from 'react-router-dom';
import { FeedbackSchema } from '../../schemas/schema';

import './styles.scss';

type Props = {
  feedback: FeedbackSchema;
};

const FeedbackCard = ({ feedback }: Props) => {
  const { id } = feedback;

  const navigate = useNavigate();

  return (
    <div
      className="feedback-card-container"
      onClick={() => navigate(`${id}`)}
    >
      {feedback.title}
    </div>
  );
};

export default FeedbackCard;
