import React from 'react';

type SpacerProps = {
  height: string | number; // 高さを指定できるように
};

const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return <div style={{ height: height }} />;
};

export default Spacer;