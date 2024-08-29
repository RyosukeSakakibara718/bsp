import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import DecideButton from "../../../../src/components/atoms/button/DecideButton";

describe("DecideButtonコンポーネント", () => {
  const mockMember = {
    id: 1,
    name: "榊原 涼介",
    grade: 2,
    cost: 300000,
    startDate: "2024/08/04",
  };
  it("決定ボタンが押下されたらonCloseが呼び出される", () => {
    const mockFunction = vi.fn(() => {});
    render(<DecideButton onClose={mockFunction} submitData={mockMember} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockFunction).toHaveBeenCalled();
  });
});
