import React from "react";

import ProjectInfoRow from "./ProjectInfoRow";
import InputDateColumn from "../../../../../components/atoms/column/inputBox/InputDateColumn";
import InputNumberColumn from "../../../../../components/atoms/column/inputBox/InputNumberColumn";
import InputStringColumn from "../../../../../components/atoms/column/inputBox/InputStringColumn";
import SelectBoxColumn from "../../../../../components/atoms/column/inputBox/SelectBoxColumn";
import { PHASES, CONTRACT_TYPE } from "../../../../../constants";
import { ProjectInfomation } from "../../../../../types/project";

type ProjectProps = {
  formData: ProjectInfomation;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const Project: React.FC<ProjectProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="container mx-auto rounded-lg">
      <table className="min-w-full">
        <tbody>
          <ProjectInfoRow>
            <InputStringColumn
              title={"案件名"}
              name="name"
              value={formData.projects_data.name}
              handleInputChange={handleInputChange}
              required={true}
            />
            <InputStringColumn
              title={"会社名"}
              name="company_name"
              value={formData.projects_data.company_name}
              handleInputChange={handleInputChange}
              required={true}
            />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputStringColumn
              title={"freeeプロジェクトID"}
              name="freee_project_code"
              value={formData.projects_data.freee_project_code}
              handleInputChange={handleInputChange}
              required={false}
            />
            <SelectBoxColumn
              title={"作業フェーズ"}
              name="phase"
              value={formData.projects_data.phase}
              handleInputChange={handleInputChange}
              array={PHASES}
            />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputDateColumn
              title={"開始日"}
              name="start_date"
              value={formData.projects_data.start_date}
              handleInputChange={handleInputChange}
            />
            <InputNumberColumn
              title={"受注額"}
              name="order_price"
              value={formData.estimations.order_price}
              moneyFlug={true}
              handleInputChange={handleInputChange}
              required={true}
            />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputDateColumn
              title={"終了日"}
              name="end_date"
              value={formData.projects_data.end_date}
              handleInputChange={handleInputChange}
            />
            <InputNumberColumn
              title={"見積原価"}
              name="estimate_cost"
              value={formData.estimations.estimate_cost}
              moneyFlug={true}
              handleInputChange={handleInputChange}
              required={true}
            />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <SelectBoxColumn
              title={"契約種別"}
              name="contract"
              value={formData.projects_data.contract}
              handleInputChange={handleInputChange}
              array={CONTRACT_TYPE}
            />
            <InputNumberColumn
              title={"見積工数"}
              name="estimate_person_month"
              value={formData.estimations.estimate_person_month}
              costFlug={true}
              handleInputChange={handleInputChange}
              required={true}
            />
          </ProjectInfoRow>
        </tbody>
      </table>
    </div>
  );
};

export default Project;
