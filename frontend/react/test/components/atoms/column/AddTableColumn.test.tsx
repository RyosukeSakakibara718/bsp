import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import AddTableColumn from "../../../../src/components/atoms/column/AddTableColumn";

describe("AddTableColumnコンポーネント", () => {
  it("入力が変更されたときにonChangeが正しく呼び出されるか確認する", () => {
    const onChangeMock = vi.fn();
    render(<AddTableColumn width="" onChange={onChangeMock} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "入力テスト" } });

    expect(onChangeMock).toHaveBeenCalledWith("入力テスト");
  });

  it("入力された値がvalueとして保持されていることを確認する", () => {
    render(<AddTableColumn width="" onChange={() => {}} />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "入力テスト" } });
    const inputvalue = inputElement.value;

    expect(inputvalue).toBe("入力テスト");
  });

  it("入力が変更されたときにonChangeが正しく呼び出されるか確認する", () => {
    render(<AddTableColumn width="100px" onChange={() => {}} />);
    const inputElement = screen.getByRole("columnheader");
    const ElementWidth = inputElement.style.width;

    expect(ElementWidth).toBe("100px");
  });
});
