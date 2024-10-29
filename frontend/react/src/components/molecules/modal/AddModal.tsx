import React, { useEffect, useState } from "react";

import { MemberData, inputCheckProps } from "../../../types/member";
import CancelButton from "../../atoms/button/CancelButton";
import DecideAddButton from "../../atoms/button/DecideAddButton";
import Spacer from "../../atoms/Spacer";
import AddTableRow from "../row/AddTableRow";
import TableHeader from "../TableHeader";
import { initialInputCheckProps, memberColumns } from "../../../data/members";

type AddModalProps = {
  data: MemberData;
  onClose: () => void;
  index: number;
  handleAddValueChange: (
    fieldName: string,
    value: string | number | Date,
  ) => void;
  handleAddMember: () => void;
};

/**
 * 追加モーダル
 *
 * @param {AddModalProps} props - モーダルコンポーネントのプロパティ。
 * @param {MemberData} props.data - 対象のデータ。
 * @param {function} props.onClose - 追加モーダルを閉じる関数。
 * @param {number} props.index - 選択行。
 * @param {function} props.handleAddValueChange - 入力された値でstateを置き換える関数。
 * @param {function} props.handleAddMember - メンバー追加を行う関数。
 * @returns {JSX.Element} 追加モーダルを返します。
 */
const AddModal: React.FC<AddModalProps> = ({
  data,
  onClose,
  index,
  handleAddValueChange,
  handleAddMember,
}) => {
  const [inputCheck, setInputCheck] = useState<inputCheckProps>(
    initialInputCheckProps,
  );
  const [isAbleToSubmit, setIsAbleToSubmit] = useState<boolean>(true);

  useEffect(() => {
    setInputCheck({
      name: data.name.trim() !== "",
      rank: data.rank > 0,
      base_cost: data.base_cost > 0,
      base_cost_start_date: data.base_cost_start_date.trim() !== "",
    });
  }, [data]);

  const handleCheckAddData = () => {
    if (Object.values(inputCheck).every(Boolean) === true) {
      handleAddMember();
      onClose();
    } else {
      setIsAbleToSubmit(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto">
        <div className="mb-4 text-left">
          <p className="text-2xl font-extrabold px-5">メンバー追加</p>
        </div>
        {Object.values(inputCheck).every(Boolean) !== true &&
        !isAbleToSubmit ? (
          <>
            <p className="text-red-500">入力項目を確認してください</p>
            <Spacer height={"20px"} />
          </>
        ) : null}
        <div className="mx-5 grid shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse">
            <thead>
              <TableHeader columns={memberColumns} />
            </thead>
            <tbody>
              <AddTableRow
                id={index + 1}
                handleAddValueChange={handleAddValueChange}
                inputCheck={inputCheck}
                isAbleToSubmit={isAbleToSubmit}
              />
            </tbody>
          </table>
        </div>
        <Spacer height="30px" />
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <DecideAddButton handleAddMember={handleCheckAddData} />
            <CancelButton onClose={onClose} />
          </div>
        </div>
        <Spacer height="20px" />
      </div>
    </div>
  );
};

export default AddModal;
