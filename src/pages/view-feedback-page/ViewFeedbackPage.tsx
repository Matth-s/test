import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import HeaderFeedback from '../../components/headers/header-feedback/HeaderFeedback';
import PageContainer from '../../components/containers/page-container/PageContainer';

const ViewFeedbackPage = () => {
  const { id } = useParams();
  const { isLoading, error, feedbacks } = useAppSelector(
    (state) => state.feedbacksSlice
  );

  const findFeedback = feedbacks.find(
    (feedback) => feedback.id === id
  );

  console.log(findFeedback);

  return (
    <>
      <PageContainer>
        <HeaderFeedback uidFeedback="" />
      </PageContainer>
    </>
  );
};

export default ViewFeedbackPage;
