import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";

import TableHeaderColumn from "../../../../src/components/atoms/column/TableHeaderColumn";
import "@testing-library/jest-dom";

describe("TableHeaderColumnコンポーネント", () => {
  it("widthプロパティが正しく適用されることを確認する", () => {
    const testWidth = "5%";
    render(<TableHeaderColumn width="5%" value="ID" />);
    const thElement = screen.getByText("ID");

    expect(thElement).toHaveStyle(`width: ${testWidth}`);
  });

  it("渡された子要素が正しくレンダリングされることを確認する", () => {
    render(<TableHeaderColumn width="5%" value="ID" />);
    const thElement = screen.getByText("ID");

    expect(thElement).toBeInTheDocument();
    expect(thElement.tagName).toBe("TH"); // 確認するための追加チェック
  });
});
