import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";

import DeleteButton from "../../../../src/components/atoms/button/DeleteButton";

describe("DecideAddButtonコンポーネント", () => {
  it("ボタンが押された際にonOpenが正しく呼び出されるか確認する", () => {
    const mockFunction = vi.fn(() => {});
    const testId = 1;
    render(<DeleteButton id={testId} onOpen={mockFunction} />);

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(mockFunction).toHaveBeenCalled();
  });
});
