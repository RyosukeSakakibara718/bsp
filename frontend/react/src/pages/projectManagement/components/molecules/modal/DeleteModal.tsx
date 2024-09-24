import React from "react";

// import CancelButton from "../../../../../components/atoms/CancelButton";
import CancelButton from "../../../../../components/atoms/button/CancelButton";
import DeleteButton from "../../../../../components/atoms/button/DeleteButton";
import TableRowColumn from "../../../../../components/atoms/column/TableRowColumn";
import Spacer from "../../../../../components/atoms/Spacer";
import TableHeader from "../../../../../components/molecules/TableHeader";
import { ProjectData } from "../../../../../types/project";

type ProjectManagementProps = {
  handleDelete: () => void;
  onClose: () => void;
  data: ProjectData;
  columns: string[];
};

/**
 * 削除モーダルコンポーネント
 * メンバーの情報を削除するためのモーダルウィンドウを表示します。
 *
 * @param {ProjectManagementProps} props - 削除モーダルのプロパティ。
 * @param {() => void} props.handleDelete - 削除を実行するための関数。
 * @param {() => void} props.onClose - モーダルを閉じるための関数。
 * @param {MemberData} props.data - 削除対象のメンバーのデータ。
 * @param {string[]} props.columns - モーダルのヘッダー項目データ
 * @returns {JSX.Element} メンバー削除用のモーダルコンポーネントを返します。
 */

const DeleteModal: React.FC<ProjectManagementProps> = ({ handleDelete, onClose, data, columns }) => {
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
                <TableHeader columns={columns} />
              </thead>
              <tbody className="bg-customPurple">
                <TableRowColumn width="5%">{data.id}</TableRowColumn>
                <TableRowColumn width="25%">{data.name}</TableRowColumn>
                <TableRowColumn width="25%">
                  {data.start_date} ~{data.end_date}
                </TableRowColumn>
                <TableRowColumn width="25%">{data.project_manager}</TableRowColumn>
              </tbody>
            </table>
          </div>
        </div>
        <Spacer height="30px" />
        <div className="flex justify-center space-x-4">
          <DeleteButton handleDelete={handleDelete} id={data.id} onClose={() => onClose()} />
          <CancelButton onClose={() => onClose()} />
        </div>
        <Spacer height="20px" />
      </div>
    </div>
  );
};

export default DeleteModal;
