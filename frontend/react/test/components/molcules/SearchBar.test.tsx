import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../../../src/components/molecules/SearchBar'
import React from 'react'

describe('SearchBarコンポーネント', () => {
  it('検索ボタンをクリックしたときにsetShowDataが呼び出されるか確認する', () => {
    const setShowDataMock = vi.fn()
    render(<SearchBar searchValue={''} setSearchValue={() => {}} clearSearchValue={() => {}} setShowData={setShowDataMock}/>)
    const inputElement = screen.getAllByRole('button')
    fireEvent.click(inputElement[0])
    
    expect(setShowDataMock).toHaveBeenCalled()
  })

  it('クリアボタンをクリックしたときにclearSearchValueが呼び出されるか確認する', () => {
    const clearSearchValueMock = vi.fn()
    render(<SearchBar searchValue={''} setSearchValue={() => {}} clearSearchValue={clearSearchValueMock} setShowData={() => {}}/>)
    const inputElement = screen.getAllByRole('button')
    fireEvent.click(inputElement[1])
    
    expect(clearSearchValueMock).toHaveBeenCalled()
  })

})