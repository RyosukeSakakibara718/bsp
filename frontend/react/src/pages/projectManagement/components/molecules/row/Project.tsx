
import TableInputDate from "../../../../../components/atoms/field/TableInputDateField";
import TableInputField from "../../../../../components/atoms/field/TableInputField";
import TableInputNumField from "../../../../../components/atoms/field/TableInputNumField";
import TableSelectField from "../../../../../components/atoms/field/TableSelectField";
import SelectBoxColumn from '../../../../../components/atoms/column/inputBox/SelectBoxColumn';
import InputStringBoxColumn from '../../../../../components/atoms/column/inputBox/InputStringBoxColumn';
import InputNumberBoxColumn from '../../../../../components/atoms/column/inputBox/InputNumberBoxColumn';
import InputDateBoxColumn from '../../../../../components/atoms/column/inputBox/InputDateBoxColumn';

import ProjectInfoRow from './ProjectInfoRow';

type ProjectProps = {
  name: string,            // プロジェクト名
  phase: string,           // フェーズ名
  freeeProjectId: string,  // freeeのプロジェクトID
  orderPrice: number | undefined,  // 受注額（任意でundefined）
  startDate: Date,         // 開始日
  endDate: Date,           // 終了日
  estimateCost: number | undefined,  // 見積原価（任意でundefined）
  estimatePersonMonth: number | undefined,  // 見積工数（任意でundefined）
  contractType: string     // 契約種別
};


const Project: React.FC<ProjectProps> = (data) => {
  const [formData, setFormData] = useState({
    name: '',
    phase: '',
    freeeProjectId: '',
    orderPrice: undefined,
    startDate: '2023-04-01',
    endDate: '2028-08-30',
    estimateCost: undefined,
    estimatePersonMonth: undefined,
    contractType: '準委任契約',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto rounded-lg">
      <table className="min-w-full">
        <tbody>
          <ProjectInfoRow>
            <InputStringBoxColumn title={'案件名'} name="name" value={formData.name} handleInputChange={handleInputChange}/>
            <SelectBoxColumn title={'作業フェーズ'} name="phase" value={formData.phase} handleInputChange={handleInputChange} array={phases} />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputStringBoxColumn title={'freeeプロジェクトID'} name="freeeProjectId" value={formData.freeeProjectId} handleInputChange={handleInputChange}/>
            <InputNumberBoxColumn title={'受注額'} name={'orderPrice'} value={formData.orderPrice} moneyFlug={true} handleInputChange={handleInputChange} />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputDateBoxColumn title={'開始日'} name={'startDate'} value={formData.startDate} handleInputChange={handleInputChange} />
            <InputNumberBoxColumn title={'見積原価'} name={'estimateCost'} value={formData.estimateCost} moneyFlug={true} handleInputChange={handleInputChange} />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputDateBoxColumn title={'終了日'} name={'endDate'} value={formData.endDate} handleInputChange={handleInputChange} />
            <InputNumberBoxColumn title={'見積工数'} name={'estimatePersonMonth'} value={formData.estimatePersonMonth} moneyFlug={true} handleInputChange={handleInputChange} />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <SelectBoxColumn title={'契約種別'} name="contractType" value={formData.contractType} handleInputChange={handleInputChange} array={contractType} />
          </ProjectInfoRow>
        </tbody>
      </table>
    </div>
  );
};

export default Project;
