import React, { useState } from 'react';
import { phases, contractType } from '../../../../../data/projectDetail';

import SelectBoxColumn from '../../../../../components/atoms/column/inputBox/SelectBoxColumn';
import InputStringBoxColumn from '../../../../../components/atoms/column/inputBox/InputStringBoxColumn';
import InputNumberBoxColumn from '../../../../../components/atoms/column/inputBox/InputNumberBoxColumn';
import InputDateBoxColumn from '../../../../../components/atoms/column/inputBox/InputDateBoxColumn';

import ProjectInfoRow from './ProjectInfoRow';

type FormData = {
  name: string,            // プロジェクト名
  phase: string,           // フェーズ名
  freeeProjectId: string,  // freeeのプロジェクトID
  orderPrice: number | undefined,  // 受注額（任意でundefined）
  startDate: string,         // 開始日
  endDate: string,           // 終了日
  estimateCost: number | undefined,  // 見積原価（任意でundefined）
  estimatePersonMonth: number | undefined,  // 見積工数（任意でundefined）
  contractType: string     // 契約種別
};

type ProjectProps = {
  formData: FormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}


const Project: React.FC<ProjectProps> = ({formData, handleInputChange}) => {

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