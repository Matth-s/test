import { useNavigate } from 'react-router-dom';

const AddFeedbackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="purple"
      onClick={() => navigate('/create-feedback')}
    >
      + Add Feedback
    </button>
  );
};

export default AddFeedbackButton;
