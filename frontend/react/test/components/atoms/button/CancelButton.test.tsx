import { describe, expect, it, vi } from "vitest";
import CancelButton from "../../../../src/components/atoms/button/CancelButton";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

describe("CancelButtonコンポーネント", () => {
  it("キャンセルボタンが押下されたらonCloseが呼び出される", () => {
    const mockFunction = vi.fn(() => {});
    render(<CancelButton onClose={mockFunction} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockFunction).toHaveBeenCalled();
  });
});
