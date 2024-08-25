import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AddModal from "../../../../src/components/molecules/modal/AddModal";
import React from "react";
import '@testing-library/jest-dom';


describe('AddModalコンポーネント', () => {
  const mockData = {
    id: 5,
    name: "",
    grade: 1,
    cost: 1000,
    startDate: ""
  };

  it('モーダルが表示されたときに、正しいUI要素が存在することを確認する', () => {
    render(<AddModal data={mockData} onClose={() => {}} index={4} />);

    // モーダルのタイトルが表示されていることを確認
    expect(screen.getByText("メンバー追加")).toBeInTheDocument();

    // IDが表示されていることを確認
    expect(screen.getByText("5")).toBeInTheDocument();

    // 各入力フィールドが正しく存在することを確認
    expect(screen.getAllByRole('textbox').length).toBe(4); // 4つの入力フィールドが存在することを確認

    // 「追加する」ボタンが表示されていることを確認
    expect(screen.getByRole('button', { name: /追加する/i })).toBeInTheDocument();

    // 「キャンセル」ボタンが表示されていることを確認
    expect(screen.getByRole('button', { name: /キャンセル/i })).toBeInTheDocument();
  });
});
