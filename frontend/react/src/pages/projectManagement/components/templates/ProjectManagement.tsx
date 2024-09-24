import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddOpenButton from "../../../../components/atoms/button/AddOpenButton";
import Spacer from "../../../../components/atoms/Spacer";
import SearchBar from "../../../../components/molecules/SearchBar";
import TableHeader from "../../../../components/molecules/TableHeader";
import { ProjectData, ProjectDataProps } from "../../../../types/project";
import DeleteModal from "../molecules/modal/DeleteModal";
import TableRow from "../molecules/row/TableRow";
import { getProjectsAll } from "../../../../hooks/useProjects";
/**
 *  案件の一覧を表示し・検索できるコンポーネント。
 *
 * @component
 * @param {ProjectManagementProps} props - コンポーネントに渡されるプロパティ。
 * @param {Array} props.data - メンバーのデータリスト。
 * @returns {JSX.Element} ProjectManagementコンポーネントを返します。
 */
const ProjectManagement: React.FC<ProjectDataProps> = ({ data }) => {
  const columns = ["案件ID", "案件名", "期間", "PM", "操作"];
  const modalColumns = ["案件ID", "案件名", "期間", "PM"]
  // TODO PMの中身実装
  const [showData, setShowData] = useState<ProjectData[]>(data);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [targetDataId, setTargetDataId] = useState(0);
  const deleteData = data[targetDataId];

  useEffect(() => {
    getProjectsAll()
      .then(projects => {
        if (projects !== null) {
          setShowData(projects);
          console.log('projects: ', projects);
        }
        setLoading(false); // ローディングを終了
      })
      .catch(error => {
        console.error("Error fetching member data:", error);
        setLoading(false); // エラーが発生してもローディングを終了
      });
  }, []);

  const handleAddButtonClick = () => {
    // TODO新規案件作成パスを指定
    navigate("/projectManagement/detail");
  };

  const handleEditButtonClick = () => {
    // TODO編集先のページのパスを指定
    navigate("/projectManagement/detail/{}");
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

  if (loading) {
    return <div>Loading...</div>;
  }

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
          <AddOpenButton
            onOpen={handleAddButtonClick}
            buttonText="案件を追加"
          />
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
                  id={item.id}
                  name={item.name}
                  start_date={item.start_date}
                  end_date={item.end_date}
                  project_manager={item.project_manager}
                  isEditPageOpen={handleEditButtonClick}
                  isDeleteModalOpen={() => handleOpenDeleteModal(item.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isDeleteModalOpen && deleteData && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg p-8 shadow-lg z-10">
            <DeleteModal onClose={handleCloseDeleteModal} data={deleteData} columns={modalColumns}/>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectManagement;
