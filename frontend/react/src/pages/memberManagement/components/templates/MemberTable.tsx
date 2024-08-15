import React, { useState } from 'react';
import TableHeader from "../../../../components/molecules/TableHeader";
import TableRow from "../../../../components/molecules/row/TableRow";
import SearchBar from '../../../../components/molecules/SearchBar';
import Spacer from '../../../../components/atoms/Spacer';
import AddButton from '../../../../components/atoms/button/AddButton';
import EditModal from '../../../../components/molecules/modal/EditModal';
import {MemberTableProps} from '../../../../types/member'
import DeleteModal from '../../../../components/molecules/modal/DeleteModal';
import AddModal from '../../../../components/molecules/modal/AddModal';


const MemberTable: React.FC<MemberTableProps> = ({ data }) => {

  const initialFormData = {
    id: 0,
    name: '',
    grade: 0,
    cost: 0,
    startDate: ''
  }
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isAddModalOpen, seAddeteModalOpen] = useState(false)
  const [targetDataId, setTargetDataId] = useState(0)
  const [showData ,setShowData] = useState(data)
  const [searchValue ,setSearchValue] = useState("")

  const editData = data[targetDataId]
  const deleteData = data[targetDataId]
  
  const handleOpenEditModal = (id: number) => {
    setTargetDataId(id - 1);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleOpenDeleteModal = (id: number) => {
    setTargetDataId(id - 1);
    setIsDeleteModalOpen(true);
  };
  
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleOpenAddModal = () => {

    seAddeteModalOpen(true);
  };

  const handleCloseAddModal = () => {
    seAddeteModalOpen(false);
  };

  const filteredMembers = data.filter(member => 
    Object.values(member).some(value => 
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const changeShowData = () => {
    setShowData(filteredMembers)
  }

  const clearShowData = () => {
    setShowData(data)
    setSearchValue('')
  }

  return (
    <>
      <div className='shadow-lg rounded-lg overflow-hidden p-8'>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} clearSearchValue={clearShowData} setShowData={changeShowData} />
        <Spacer height="20px"></Spacer>
        <div className="flex justify-end mr-2.5">
          <AddButton onOpen={handleOpenAddModal}/>
        </div>
        <Spacer height="20px"></Spacer>
        <div className="overflow-hidden rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <TableHeader isShowing={true} />
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
                  isDeleteModalOpen={() => handleOpenDeleteModal((item.id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p>{isEditModalOpen}</p>
    {isAddModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg p-8 shadow-lg z-10">
          <AddModal onClose={handleCloseAddModal} data={initialFormData} index={data.length}/>
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

