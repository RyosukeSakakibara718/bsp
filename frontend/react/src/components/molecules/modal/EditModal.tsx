import React, { useEffect, useState } from 'react';
import RoundDecideButton from '../../atoms/button/RoundDecideButton';
import CancelButton from '../../atoms/button/CancelButton';
import TableHeader from '../TableHeader';
import EditTableRow from '../row/EditTableRow';
import Spacer from '../../atoms/Spacer';
import { MemberData } from '../../../types/member';

type MemberTableProps = {
  onClose: () => void;
  data: MemberData;
};



const EditModal: React.FC<MemberTableProps> = ({ onClose, data }) => {
  
  const [EditData, setEditData] = useState(data)
  
  const handleValueChange = (key: string, value: string) => {
    setEditData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex">
        <p className="text-2xl font-extrabold px-5">編集</p>
      </div>
      <div className="mx-5 grid shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead>
            <TableHeader isShowing={false} />
          </thead>
          <tbody>
            <EditTableRow 
              id={data.id}
              name={data.name}
              grade={data.grade}
              cost={data.cost}
              startDate={data.startDate}
              onValueChange={handleValueChange}
            />
          </tbody>
        </table>
      </div>
      <Spacer height="30px" />
      <div className="flex justify-center">
        <div className="flex space-x-4">
          <RoundDecideButton onClose={() => onClose()} submitData={EditData}/>
          <CancelButton onClose={() => onClose()}/>
        </div>
      </div>
      <Spacer height="20px" />
    </div>
  );
};

export default EditModal;

