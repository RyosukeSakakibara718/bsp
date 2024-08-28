import React from "react";
import DeleteButton from "../../atoms/button/DeleteButton";
import CancelButton from "../../atoms/button/CancelButton";
import TableHeader from "../TableHeader";
import Spacer from "../../atoms/Spacer";
import TableRowColumn from "../../atoms/column/TableRowColumn";
import { MemberData } from "../../../types/member";

type MemberTableProps = {
  onClose: () => void;
  data: MemberData;
};

/**
 * 削除モーダルコンポーネント
 * メンバーの情報を削除するためのモーダルウィンドウを表示します。
 *
 * @param {MemberTableProps} props - 削除モーダルのプロパティ。
 * @param {() => void} props.onClose - モーダルを閉じるための関数。
 * @param {MemberData} props.data - 削除対象のメンバーのデータ。
 * @returns {JSX.Element} メンバー削除用のモーダルコンポーネントを返します。
 */

const DeleteModal: React.FC<MemberTableProps> = ({ onClose, data }) => {
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
                <TableHeader isShowing={false} />
              </thead>
              <tbody className="bg-customPurple">
                <TableRowColumn width="5%">{data.id}</TableRowColumn>
                <TableRowColumn width="25%">{data.name}</TableRowColumn>
                <TableRowColumn width="10%">{data.grade}</TableRowColumn>
                <TableRowColumn width="25%">
                  {data.cost.toLocaleString()}
                </TableRowColumn>
                <TableRowColumn width="25%">{data.startDate}</TableRowColumn>
              </tbody>
            </table>
          </div>
        </div>
        <Spacer height="30px" />
        <div className="flex justify-center space-x-4">
          <DeleteButton id={data.id} onClose={() => onClose()} />
          <CancelButton onClose={() => onClose()} />
        </div>
        <Spacer height="20px" />
      </div>
    </div>
  );
};

export default DeleteModal;
