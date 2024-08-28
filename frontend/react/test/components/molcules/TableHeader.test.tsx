import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TableHeader from "../../../src/components/molecules/TableHeader";
import React from "react";

describe("TableHeaderコンポーネント", () => {
  it("渡したcolumnsが正しくレンダリングされることを確認する", () => {
    const mockColumns = ["ID", "メンバー名", "等級", "原価", "開始日", "操作"];
    render(<TableHeader columns={mockColumns} />);
    mockColumns.forEach(column => {
      expect(screen.getByText(column).textContent).toBe(column);
    });
  });
});
