import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";

import DeleteModal from "../../../../src/components/molecules/modal/DeleteModal";

describe("DeleteModalコンポーネント", () => {
  const dataMock = {
    id: 1,
    name: "Test Name",
    grade: 5,
    base_cost: 1000,
    base_cost_start_date: "2024-08-15",
  };

  it("ボタン要素が2個存在することを確認", () => {
    render(<DeleteModal data={dataMock} onClose={() => {}} />);

    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(2);
  });
});
