import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import TableHeader from "../../../src/components/molecules/TableHeader";

describe("TableHeaderコンポーネント", () => {
  it("渡したcolumnsが正しくレンダリングされることを確認する", () => {
    const mockColumns = ["ID", "メンバー名", "等級", "原価", "開始日", "操作"];
    render(<TableHeader columns={mockColumns} />);
    mockColumns.forEach(column => {
      expect(screen.getByText(column).textContent).toBe(column);
    });
  });
});
