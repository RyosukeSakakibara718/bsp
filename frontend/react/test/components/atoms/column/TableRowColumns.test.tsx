import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import TableRowColumn from "../../../../src/components/atoms/column/TableRowColumn";

describe("TableRowColumnコンポーネント", () => {
  it("カラムが指定の幅で表示される", () => {
    const widthMock = "100px";
    render(<TableRowColumn width={widthMock}>テスト</TableRowColumn>);
    const thElement = screen.getByRole("columnheader");
    expect(thElement.style.width).toBe(widthMock);
  });
  it("childrenで渡した値が表示される", () => {
    const childrenMock = "テスト";
    render(<TableRowColumn width={"100px"}>{childrenMock}</TableRowColumn>);
    const thElement = screen.getByRole("columnheader");
    expect(thElement.textContent).toBe(childrenMock);
  });
});
