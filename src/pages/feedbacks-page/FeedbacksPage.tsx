import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getFeedbacksService } from '../../services/feedback-service';

import PageContainer from '../../components/containers/page-container/PageContainer';
import Aside from '../../components/aside/Aside';
import Settings from '../../components/settings/Settings';
import HeaderFeedbacks from '../../components/headers/header-feedbacks/HeaderFeedbacks';
import FeedbackCard from '../../components/feedback-card/FeedbackCard';

import './styles.scss';

const FeedbacksPage = () => {
  const dispatch = useAppDispatch();
  const { feedbacks, isLoading, error } = useAppSelector(
    (state) => state.feedbacksSlice
  );

  const fectData = () => {
    dispatch(getFeedbacksService());
  };

  useEffect(() => {
    if (isLoading) {
      fectData();
    }
  }, [isLoading]);

  return (
    <div>
      <PageContainer>
        <Aside search="all" />
        <div className="right-content">
          <HeaderFeedbacks>
            <p>heead</p>
          </HeaderFeedbacks>
          {isLoading ? (
            <p>chargement</p>
          ) : error ? (
            <p>une erreur est survenue</p>
          ) : feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))
          ) : (
            <p>non content</p>
          )}
        </div>
        <Settings />
      </PageContainer>
    </div>
  );
};

export default FeedbacksPage;
