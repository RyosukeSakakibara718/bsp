import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";

import AddModal from "../../../../src/components/molecules/modal/AddModal";

describe("AddModalコンポーネント", () => {
  const mockData = {
    id: 5,
    name: "",
    rank: 1,
    base_cost: 1000,
    base_cost_start_date: "",
  };

  it("モーダルが表示されたときに、正しいUI要素が存在することを確認する", () => {
    render(<AddModal data={mockData} onClose={() => { } } index={4} handleAddValueChange={() =>{}} handleAddMember={() => {}} />);

    // モーダルのタイトルが表示されていることを確認
    expect(screen.getByText("メンバー追加")).toBeTruthy();

    // IDが表示されていることを確認
    expect(screen.getByText("5")).toBeTruthy();

    // 各入力フィールドが正しく存在することを確認
    expect(screen.getAllByRole("textbox").length).toBe(1); // type='text'

    expect(screen.getAllByRole("spinbutton").length).toBe(2); // type='number'

    // ToDo: Date型inputboxのテスト

    // 「追加する」ボタンが表示されていることを確認
    expect(screen.getByRole("button", { name: /追加する/i })).toBeTruthy();

    // 「キャンセル」ボタンが表示されていることを確認
    expect(screen.getByRole("button", { name: /キャンセル/i })).toBeTruthy();
  });
});
