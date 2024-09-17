import React from "react";
import CommentBox from "../molecules/CommentBox";
import Spacer from "../../../../components/atoms/Spacer";

const Home: React.FC = () => {
  return (
    <div>
      <Spacer height="40px"></Spacer>
      <CommentBox />
    </div>
  );
};

export default Home;
