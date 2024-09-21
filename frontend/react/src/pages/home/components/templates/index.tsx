import React from "react";

import Spacer from "../../../../components/atoms/Spacer";
import { sampleMembersData } from "../../../../data/homeMemInfo";
import CommentBox from "../organisms/CommentBox";
import MemberInfo from "../organisms/MemberInfo";

const Home: React.FC = () => {
  /**
   * ホーム画面表示する、コンポーネント。
   *
   * @component
   * @returns {JSX.Element} Homeコンポーネントを返します。
   */
  return (
    <div>
      <Spacer height="40px"></Spacer>
      <MemberInfo MembersData={sampleMembersData} />
      <Spacer height="40px"></Spacer>
      <CommentBox />
    </div>
  );
};

export default Home;
