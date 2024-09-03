import React, { useState } from "react";

import { MemberData } from "../../../types/member";
import CancelButton from "../../atoms/button/CancelButton";
import DecideAddButton from "../../atoms/button/DecideAddButton";
import Spacer from "../../atoms/Spacer";
import AddTableRow from "../row/AddTableRow";
import TableHeader from "../TableHeader";

type AddModalProps = {
  data: MemberData;
  onClose: () => void;
  index: number;
  handleAddValueChange: () => void;
  handleAddMember: () => void;
};

/**
 * 追加モーダル
 *
 * @param {AddModalProps} props - モーダルコンポーネントのプロパティ。
 * @param {MemberData} props.data - 対象のデータ。
 * @param {function} props.onClose - 追加モーダルを閉じる関数。
 * @param {number} props.index - 選択行。
 * @returns {JSX.Element} 追加モーダルを返します。
 */
const AddModal: React.FC<AddModalProps> = ({ data, onClose, index, handleAddValueChange, handleAddMember }) => {


  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex">
        <p className="text-2xl font-extrabold px-5">メンバー追加</p>
      </div>
      <div className="mx-5 grid shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            <AddTableRow
              id={index + 1}
              name={data.name}
              rank={data.rank}
              base_cost={data.base_cost}
              base_cost_start_date={data.base_cost_start_date}
              handleAddValueChange={handleAddValueChange}
            />
          </tbody>
        </table>
      </div>
      <Spacer height="30px" />
      <div className="flex justify-center">
        <div className="flex space-x-4">
          <DecideAddButton handleAddMember={handleAddMember} onClose={onClose} />
          <CancelButton onClose={onClose} />
        </div>
      </div>
      <Spacer height="20px" />
    </div>
  );
};

export default AddModal;
