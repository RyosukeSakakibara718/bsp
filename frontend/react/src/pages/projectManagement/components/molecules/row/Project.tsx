import React, { useState } from "react";
import { phases, contractType } from "../../../../../data/projectDetail";

import SelectBoxColumn from "../../../../../components/atoms/column/inputBox/SelectBoxColumn";
import InputStringBoxColumn from "../../../../../components/atoms/column/inputBox/InputStringBoxColumn";
import InputNumberBoxColumn from "../../../../../components/atoms/column/inputBox/InputNumberBoxColumn";
import InputDateBoxColumn from "../../../../../components/atoms/column/inputBox/InputDateBoxColumn";

import ProjectInfoRow from "./ProjectInfoRow";

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
            <InputStringBoxColumn
              title={"案件名"}
              name="name"
              value={formData.projects_data.name}
              handleInputChange={handleInputChange}
            />
            <SelectBoxColumn
              title={"作業フェーズ"}
              name="phase"
              value={formData.projects_data.phase}
              handleInputChange={handleInputChange}
              array={phases}
            />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputStringBoxColumn
              title={"freeeプロジェクトID"}
              name="freee_project_code"
              value={formData.projects_data.freee_project_code}
              handleInputChange={handleInputChange}
            />
            <InputNumberBoxColumn
              title={"受注額"}
              name="order_price"
              value={formData.estimations.order_price}
              moneyFlug={true}
              handleInputChange={handleInputChange}
            />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputDateBoxColumn
              title={"開始日"}
              name="start_date"
              value={formData.projects_data.start_date}
              handleInputChange={handleInputChange}
            />
            <InputNumberBoxColumn
              title={"見積原価"}
              name="estimate_cost"
              value={formData.estimations.estimate_cost}
              moneyFlug={true}
              handleInputChange={handleInputChange}
            />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InputDateBoxColumn
              title={"終了日"}
              name="end_date"
              value={formData.projects_data.end_date}
              handleInputChange={handleInputChange}
            />
            <InputNumberBoxColumn
              title={"見積工数"}
              name="estimate_person_month"
              value={formData.estimations.estimate_person_month}
              moneyFlug={true}
              handleInputChange={handleInputChange}
            />
          </ProjectInfoRow>
          <ProjectInfoRow>
            <SelectBoxColumn
              title={"契約種別"}
              name="contract"
              value={formData.projects_data.contract}
              handleInputChange={handleInputChange}
              array={contractType}
            />
          </ProjectInfoRow>
        </tbody>
      </table>
    </div>
  );
};

export default Project;
