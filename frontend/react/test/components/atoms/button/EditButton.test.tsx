import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import EditButton from "../../../../src/components/atoms/button/EditButton";

describe("EditButtonコンポーネント", () => {
  it("ボタンが押された際にonOpenが正しく呼び出されるか確認する", () => {
    const mockFunction = vi.fn(() => {});
    const testId = 1;
    render(<EditButton id={testId} onOpen={mockFunction} />);

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(mockFunction).toHaveBeenCalled();
  });
});
