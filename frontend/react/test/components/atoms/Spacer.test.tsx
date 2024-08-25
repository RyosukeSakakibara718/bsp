import { render } from "@testing-library/react";
// eslint-disable-next-line import/order
import React from "react";
import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import Spacer from "../../../src/components/atoms/Spacer";

describe("Spacer", () => {
  it("指定された高さのスペースがレンダリングされるべき", () => {
    const { container } = render(<Spacer height={20} />);

    const divElement = container.firstChild as HTMLElement;

    // div要素が存在することを確認
    expect(divElement).toBeInTheDocument();

    // divの高さが指定された値になっていることを確認
    expect(divElement).toHaveStyle("height: 20px");
  });

  it("高さに文字列を指定した場合も正しく適用されるべき", () => {
    const { container } = render(<Spacer height="50%" />);
    const divElement = container.firstChild as HTMLElement;

    // div要素が存在することを確認
    expect(divElement).toBeInTheDocument();

    // divの高さが指定された値になっていることを確認
    expect(divElement).toHaveStyle("height: 50%");
  });
});
