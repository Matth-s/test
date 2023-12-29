import BackButton from '../../buttons/back-button/BackButton';

import './styles.scss';

type Props = {
  uidFeedback: string;
};

const HeaderFeedback = ({ uidFeedback }: Props) => {
  return (
    <div className="header-feedback-container flex flex__alignCenter">
      <BackButton />
      <button>Edit Feedback</button>
    </div>
  );
};

export default HeaderFeedback;
