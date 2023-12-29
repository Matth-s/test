import React from 'react';

import './styles.scss';

type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default PageContainer;
