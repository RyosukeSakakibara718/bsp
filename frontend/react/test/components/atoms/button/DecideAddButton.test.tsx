import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DecideAddButton from '../../../../src/components/atoms/button/DecideAddButton'
import React from 'react';

describe('DecideAddButtonコンポーネント', () => {
  it('ボタンが押された際にhundleSubmitが正しく呼び出されるか確認する', () => {
    const mockFunction = vi.fn(() => '追加する');
    render(<DecideAddButton hundleSubmit={mockFunction} />)
    const ButtonElement = screen.getByRole('button')

    const buttonValue = ButtonElement.firstChild?.textContent
    expect(buttonValue).toBe('追加する')
  })
})