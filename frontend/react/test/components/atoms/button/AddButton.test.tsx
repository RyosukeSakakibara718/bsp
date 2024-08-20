import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AddButton from "../../../../src/components/atoms/button/AddButton"
import React from "react";

describe('AddButtonコンポーネント',()=> {
  it('ボタンが押された際にonOpenが正しく呼び出されるか確認する', ()=> {
    const mockFunction = vi.fn(() => {});
    render(<AddButton onOpen={mockFunction} />)
    const ButtonElement = screen.getByRole('button')

    fireEvent.click(ButtonElement)
    expect(mockFunction).toHaveBeenCalled()

  })
})