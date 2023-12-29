import { useNavigate } from 'react-router-dom';

import './styles.scss';
import { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { logOutService } from '../../services/auth-service';

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const handleLogOut = () => {
    dispatch(logOutService())
      .unwrap()
      .then((res) => {
        if (res.status === 201) {
          console.log('lout out');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="settings-container">
      <button onClick={() => setOpenSettings((prev) => !prev)}>
        Settings
      </button>

      {openSettings && (
        <>
          <button onClick={() => handleLogOut()}>Log out</button>
          <button onClick={() => navigate('/profile')}>
            Profile
          </button>
        </>
      )}
    </div>
  );
};

export default Settings;
