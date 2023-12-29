import React from 'react';
import FeedbackForm from '../../components/forms/feedback/FeedbackForm';

const CreateFeedbackPage = () => {
  return (
    <div>
      <FeedbackForm isEditing={false} title="Create New Feedback" />
    </div>
  );
};

export default CreateFeedbackPage;
