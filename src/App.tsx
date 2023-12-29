import { Routes, Route, Navigate } from 'react-router-dom';

import AuthPage from './pages/auth-page/AuthPage';
import PrivateRoutes from './utils/PrivateRoutes';
import FeedbacksPage from './pages/feedbacks-page/FeedbacksPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import CreateFeedbackPage from './pages/create-feedback-page/CreateFeedbackPage';
import ViewFeedbackPage from './pages/view-feedback-page/ViewFeedbackPage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/create-feedback"
            element={<CreateFeedbackPage />}
          />
        </Route>

        <Route path="/feedbacks" element={<FeedbacksPage />} />
        <Route path="/feedbacks/:id" element={<ViewFeedbackPage />} />
        <Route path="/" element={<Navigate to="feedbacks" />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
