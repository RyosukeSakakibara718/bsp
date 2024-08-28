import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchBox from "../../../src/components/atoms/SearchBox";
import "@testing-library/jest-dom";
import React from "react";

describe("SearchBoxコンポーネント", () => {
  it("プレースホルダーが正しく設定されているか確認する", () => {
    render(
      <SearchBox
        searchValue=""
        setSearchValue={() => {}}
        setShowData={() => {}}
        placeholder="test"
      />,
    );

    const inputElement = screen.getByPlaceholderText("test");
    expect(inputElement).toBeInTheDocument();
  });

  it("入力が変更されたときにsetSearchValueが正しく呼び出されるか確認する", () => {
    const setSearchValueMock = vi.fn();
    render(
      <SearchBox
        searchValue=""
        setSearchValue={setSearchValueMock}
        setShowData={() => {}}
        placeholder="test"
      />,
    );

    const inputElement = screen.getByPlaceholderText("test");
    fireEvent.change(inputElement, { target: { value: "入力テスト" } });

    expect(setSearchValueMock).toHaveBeenCalledWith("入力テスト");
  });

  it("Enterキーが押されたときにsetShowDataが正しく呼び出されるか確認する", () => {
    const setShowDataMock = vi.fn();
    render(
      <SearchBox
        searchValue=""
        setSearchValue={() => {}}
        setShowData={setShowDataMock}
        placeholder="test"
      />,
    );

    const inputElement = screen.getByPlaceholderText("test");
    fireEvent.keyDown(inputElement, { key: "Enter" });

    expect(setShowDataMock).toHaveBeenCalled();
  });

  it("Enterキー以外のキーが押されたときにsetShowDataが呼び出されないことを確認する", () => {
    const setShowDataMock = vi.fn();
    render(
      <SearchBox
        searchValue=""
        setSearchValue={() => {}}
        setShowData={setShowDataMock}
        placeholder="test"
      />,
    );

    const inputElement = screen.getByPlaceholderText("test");
    fireEvent.keyDown(inputElement, { key: "a" });

    expect(setShowDataMock).not.toHaveBeenCalled();
  });
});
