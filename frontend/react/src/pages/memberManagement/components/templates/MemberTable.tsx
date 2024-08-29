import React, { useState } from "react";

import AddButton from "../../../../components/atoms/button/AddButton";
import Spacer from "../../../../components/atoms/Spacer";
import AddModal from "../../../../components/molecules/modal/AddModal";
import DeleteModal from "../../../../components/molecules/modal/DeleteModal";
import EditModal from "../../../../components/molecules/modal/EditModal";
import TableRow from "../../../../components/molecules/row/TableRow";
import SearchBar from "../../../../components/molecules/SearchBar";
import TableHeader from "../../../../components/molecules/TableHeader";
import { MemberTableProps } from "../../../../types/member";

/**
 * メンバーの一覧を表示し、追加・編集・削除を行うテーブルコンポーネント。
 *
 * @component
 * @param {MemberTableProps} props - コンポーネントに渡されるプロパティ。
 * @param {Array} props.data - メンバーのデータリスト。
 * @returns {JSX.Element} MemberTableコンポーネントを返します。
 */
const MemberTable: React.FC<MemberTableProps> = ({ data }) => {
  const initialFormData = {
    id: 0,
    name: "",
    grade: 0,
    cost: 0,
    startDate: "",
  };

  const columns = ["ID", "メンバー名", "等級", "原価", "開始日", "操作"];

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, seAddeteModalOpen] = useState(false);
  const [targetDataId, setTargetDataId] = useState(0);
  const [showData, setShowData] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const editData = data[targetDataId];
  const deleteData = data[targetDataId];

  /**
   * 編集モーダルを開く
   * @param {number} id - 編集対象のメンバーID
   */
  const handleOpenEditModal = (id: number) => {
    setTargetDataId(id - 1);
    setIsEditModalOpen(true);
  };

  /**
   * 編集モーダルを閉じる
   */
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  /**
   * 削除モーダルを開く
   * @param {number} id - 削除対象のメンバーID
   */
  const handleOpenDeleteModal = (id: number) => {
    setTargetDataId(id - 1);
    setIsDeleteModalOpen(true);
  };

  /**
   * 削除モーダルを閉じる
   */
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  /**
   * 追加モーダルを開く
   */
  const handleOpenAddModal = () => {
    seAddeteModalOpen(true);
  };

  /**
   * 追加モーダルを閉じる
   */
  const handleCloseAddModal = () => {
    seAddeteModalOpen(false);
  };

  /**
   * 検索条件に一致するメンバーをフィルタリング
   * @returns {Array} フィルタリングされたメンバーリスト
   */
  const filteredMembers = data.filter(member =>
    Object.values(member).some(value =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase()),
    ),
  );

  /**
   * 検索結果を表示するためにデータを更新
   */
  const changeShowData = () => {
    setShowData(filteredMembers);
  };

  /**
   * 検索結果をクリアし、すべてのメンバーを表示
   */
  const clearShowData = () => {
    setShowData(data);
    setSearchValue("");
  };

  return (
    <>
      <div className="shadow-lg rounded-lg overflow-hidden p-8">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          clearSearchValue={clearShowData}
          setShowData={changeShowData}
        />
        <Spacer height="20px"></Spacer>
        <div className="flex justify-end mr-2.5">
          <AddButton onOpen={handleOpenAddModal} />
        </div>
        <Spacer height="20px"></Spacer>
        <div className="overflow-hidden rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <TableHeader columns={columns} />
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {showData.map(item => (
                <TableRow
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  grade={item.grade}
                  cost={item.cost}
                  startDate={item.startDate}
                  isEditModalOpen={() => handleOpenEditModal(item.id)}
                  isDeleteModalOpen={() => handleOpenDeleteModal(item.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg p-8 shadow-lg z-10">
            <AddModal
              onClose={handleCloseAddModal}
              data={initialFormData}
              index={data.length}
            />
          </div>
        </div>
      )}
      {isEditModalOpen && editData && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg p-8 shadow-lg z-10">
            <EditModal onClose={handleCloseEditModal} data={editData} />
          </div>
        </div>
      )}
      {isDeleteModalOpen && deleteData && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg p-8 shadow-lg z-10">
            <DeleteModal onClose={handleCloseDeleteModal} data={deleteData} />
          </div>
        </div>
      )}
    </>
  );
};

export default MemberTable;
