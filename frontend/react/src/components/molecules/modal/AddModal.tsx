import React, { useEffect, useState } from 'react';
import TableHeader from '@molecules/TableHeader';
import Spacer from '@atoms/Spacer';
import CancelButton from '@atoms/button/CancelButton';
import AddTableRow from '@molecules/row/AddTableRow';
import DecideAddButton from '@atoms/button/DecideAddButton';
import { MemberData } from '@types/member';

type AddModalProps = {
	data: MemberData;
	onClose: () => void;
	index: number
}

const AddModal: React.FC<AddModalProps> = ({ data, onClose, index }) => {

	const [formData, setFormData] = useState(data);

	const handleValueChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

	const hundleSubmitData = () => {
		handleValueChange('id', index+1)
		console.log(formData)
	}

  return (
		<div className="bg-white shadow-lg rounded-lg p-6">
			<div className="flex">
				<p className="text-2xl font-extrabold px-5">メンバー追加</p>
			</div>
			<div className="mx-5 grid shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
					<thead>
						<TableHeader isShowing={false} />
					</thead>
					<tbody>
						<AddTableRow 
							id={index+1}
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
					<DecideAddButton hundleSubmit={hundleSubmitData}/>
					<CancelButton onClose={onClose}/>
				</div>
			</div>
			<Spacer height="20px" />
		</div>
    );
};

export default AddModal;
