import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import EditTableRowColumn from "../../../../src/components/atoms/column/EditTableRowColumn";

describe("EditTableRowColumnコンポーネント", () => {
  it("初期値が正しく表示されることを確認する", () => {
    render(
      <EditTableRowColumn
        width="100px"
        initialValue="初期値"
        onChange={() => {}}
      />,
    );

    const inputElement = screen.getByDisplayValue("初期値") as HTMLInputElement;
    expect(inputElement.value).toBe("初期値");
  });

  it("入力が変更されたときにonChangeが正しく呼び出されるか確認する", () => {
    const onChangeMock = vi.fn();
    render(
      <EditTableRowColumn width="" initialValue="" onChange={onChangeMock} />,
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "入力テスト" } });

    expect(onChangeMock).toHaveBeenCalledWith("入力テスト");
  });

  it("入力された値がvalueとして保持されていることを確認する", () => {
    render(<EditTableRowColumn width="" initialValue="" onChange={() => {}} />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "入力テスト" } });
    const inputvalue = inputElement.value;

    expect(inputvalue).toBe("入力テスト");
  });

  it("入力が変更されたときにonChangeが正しく呼び出されるか確認する", () => {
    render(
      <EditTableRowColumn width="100px" initialValue="" onChange={() => {}} />,
    );
    const inputElement = screen.getByRole("columnheader");
    const ElementWidth = inputElement.style.width;

    expect(ElementWidth).toBe("100px");
  });
});
