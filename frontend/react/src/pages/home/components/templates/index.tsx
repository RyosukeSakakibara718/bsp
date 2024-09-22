import React from "react";

import Spacer from "../../../../components/atoms/Spacer";
import { sampleMembersData, sampleOrderInfo } from "../../../../data/home";
import CommentBox from "../organisms/CommentBox";
import EstimatedLanding from "../organisms/EstimatedLanding";
import MemberInfo from "../organisms/MemberInfo";
import OrderInfo from "../organisms/OrderInfo";

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
      <div style={{ display: "flex", gap: "40px" }}>
        <OrderInfo OrderInfoData={sampleOrderInfo} />
        <EstimatedLanding OrderInfoData={sampleOrderInfo} />
      </div>
      <Spacer height="40px"></Spacer>
      <MemberInfo MembersData={sampleMembersData} />
      <Spacer height="40px"></Spacer>
      <CommentBox />
    </div>
  );
};

export default Home;
