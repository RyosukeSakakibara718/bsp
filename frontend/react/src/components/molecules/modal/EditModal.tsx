import React, { useState } from "react";

import { MemberData } from "../../../types/member";
import CancelButton from "../../atoms/button/CancelButton";
import DecideButton from "../../atoms/button/DecideButton";
import Spacer from "../../atoms/Spacer";
import EditTableRow from "../row/EditTableRow";
import TableHeader from "../TableHeader";

type MemberTableProps = {
  onClose: () => void;
  editData: MemberData;
  handleValueChange: (fieldName: string, value: any) => void;
  handleSubmitEditData: () => void;
};

/**
 * 編集モーダルコンポーネント
 * メンバーの情報を編集するためのモーダルウィンドウを表示します。
 *
 * @param {MemberTableProps} props - 編集モーダルのプロパティ。
 * @param {() => void} props.onClose - モーダルを閉じるための関数。
 * @param {() => void} props.editData - 編集対象のメンバーの値。
 * @param {Function} handleValueChange - 編集モーダル内で値が変更された際にstateを変更する関数
 * @param {Function} handleSubmitEditData - 編集データをAPIに投げる関数
 * @returns {JSX.Element} メンバー編集用のモーダルコンポーネントを返します。
 */
const EditModal: React.FC<MemberTableProps> = ({ onClose, editData, handleValueChange, handleSubmitEditData }) => {
// const EditModal: React.FC<MemberTableProps> = ({ handleValueChange, onClose, data, onEdit, editValue }) => {

  /**
   * フォームのフィールドが変更されたときに呼び出される関数
   *
   * @param {string} key - 変更されたフィールドのキー。
   * @param {string} value - 新しい値。
   */

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex">
        <p className="text-2xl font-extrabold px-5">編集</p>
      </div>
      <div className="mx-5 grid shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            <EditTableRow
              id={editData.id}
              name={editData.name}
              rank={editData.rank}
              base_cost={editData.base_cost}
              base_cost_start_date={editData.base_cost_start_date}
              onValueChange={handleValueChange}
            />
          </tbody>
        </table>
      </div>
      <Spacer height="30px" />
      <div className="flex justify-center">
        <div className="flex space-x-4">
          <DecideButton onClose={() => onClose()} editData={editData} handleSubmitEditData={handleSubmitEditData} />
          <CancelButton onClose={() => onClose()} />
        </div>
      </div>
      <Spacer height="20px" />
    </div>
  );
};

export default EditModal;
