import React from 'react';

import AddFeedbackButton from '../../buttons/add_feedback-button/AddFeedbackButton';

import './styles.scss';

type Props = {
  children: React.ReactNode;
};

const HeaderFeedbacks = ({ children }: Props) => {
  return (
    <div className="header-feedbacks-container flex flex__alignCenter radius-10">
      {children}
      <AddFeedbackButton />
    </div>
  );
};

export default HeaderFeedbacks;
