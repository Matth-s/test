import { useNavigate } from 'react-router-dom';

import iconBack from '../../../assets/icon-arrow-left.svg';

import './styles.scss';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="go-back-button flex flex__alignCenter"
      onClick={() => navigate(-1)}
    >
      <img src={iconBack} alt="back" />
      Go Back
    </button>
  );
};

export default BackButton;
