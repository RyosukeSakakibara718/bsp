import React from "react";

import { MemberData } from "../../../types/member";
import CancelButton from "../../atoms/button/CancelButton";
import DeleteButton from "../../atoms/button/DeleteButton";
import TableRowColumn from "../../atoms/column/TableRowColumn";
import Spacer from "../../atoms/Spacer";
import TableHeader from "../TableHeader";

type MemberTableProps = {
  onClose: () => void;
  data: MemberData;
  handleDelete: () => void;
};

/**
 * 削除モーダルコンポーネント
 * メンバーの情報を削除するためのモーダルウィンドウを表示します。
 *
 * @param {MemberTableProps} props - 削除モーダルのプロパティ。
 * @param {() => void} props.onClose - モーダルを閉じるための関数。
 * @param {MemberData} props.data - 削除対象のメンバーのデータ。
 * @param {string[]} props.columns - モーダルのヘッダー項目データ
 * @returns {JSX.Element} メンバー削除用のモーダルコンポーネントを返します。
 */

const DeleteModal: React.FC<MemberTableProps> = ({
  onClose,
  data,
  handleDelete,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto">
        <div className="mb-4 text-left">
          <p className="text-xl font-bold">削除</p>
        </div>
        <div className="mb-4 text-left">
          <p className="text-gray-700">
            下記メンバーを削除してよろしいですか？
          </p>
        </div>
        <div className="mb-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full border-collapse">
              <thead>
                <TableHeader />
              </thead>
              <tbody className="bg-customPurple">
                <TableRowColumn width="25%">{data.name}</TableRowColumn>
                <TableRowColumn width="10%">{data.rank}</TableRowColumn>
                <TableRowColumn width="25%">
                  {data.base_cost.toLocaleString()}
                </TableRowColumn>
                <TableRowColumn width="25%">
                  {data.base_cost_start_date}
                </TableRowColumn>
              </tbody>
            </table>
          </div>
        </div>
        <Spacer height="30px" />
        <div className="flex justify-center space-x-4">
          <DeleteButton
            id={data.id}
            onClose={() => onClose()}
            handleDelete={handleDelete}
          />
          <CancelButton onClose={() => onClose()} />
        </div>
        <Spacer height="20px" />
      </div>
    </div>
  );
};

export default DeleteModal;
