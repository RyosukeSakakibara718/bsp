import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";

import EditModal from "../../../../src/components/molecules/modal/EditModal";

describe("EditModalコンポーネント", () => {
  const dataMock = {
    id: 1,
    name: "Test Name",
    rank: 5,
    base_cost: 1000,
    base_cost_start_date: "2024-08-15",
  };

  it("EditTableRow に正しいプロパティが渡されているか確認する", () => {
    render(<EditModal editData={dataMock} onClose={() => {}} handleValueChange={() =>{}} handleSubmitEditData={() => {}}/>);

    expect(screen.getByDisplayValue("Test Name")).to.exist;
    expect(screen.getByDisplayValue(5)).to.exist;
    expect(screen.getByDisplayValue("1000")).to.exist;
    expect(screen.getByDisplayValue("2024-08-15")).to.exist;
  });

  it("ボタン要素が2個存在することを確認", () => {
    render(<EditModal editData={dataMock} onClose={() => {}} handleValueChange={() =>{}} handleSubmitEditData={() => {}} />);

    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(2);
  });
});
