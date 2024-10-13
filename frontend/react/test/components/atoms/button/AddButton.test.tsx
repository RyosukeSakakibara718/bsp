import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import AddOpenButton from "../../../../src/components/atoms/button/AddOpenButton";

describe("AddButtonコンポーネント", () => {
  it("ボタンが押された際にonOpenが正しく呼び出されるか確認する", () => {
    const mockFunction = vi.fn(() => {});
    render(<AddOpenButton onOpen={mockFunction} buttonText={""} />);
    const ButtonElement = screen.getByRole("button");

    fireEvent.click(ButtonElement);
    expect(mockFunction).toHaveBeenCalled();
  });
});
