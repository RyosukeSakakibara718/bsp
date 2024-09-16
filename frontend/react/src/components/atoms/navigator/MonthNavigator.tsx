import React, { useState } from "react";

const MonthNavigater = () => {
  // 現在の日付から初期値を設定
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  // 現在の月から6ヶ月分を表示するための初期値を設定
  const [startYear, setStartYear] = useState<number>(currentYear);
  const [startMonth, setStartMonth] = useState<number>(currentMonth);

  /**
   * 6か月分の月を計算してリストを返す関数
   */
  const getMonths = (year: number, month: number): string[] => {
    const months = [];
    for (let i = 0; i < 6; i++) {
      const newMonth = ((month + i - 1) % 12) + 1;
      const newYear = year + Math.floor((month + i - 1) / 12);
      months.push(`${newYear}/${newMonth}`);
    }
    return months;
  };

  // 現在の6ヶ月分の月リストを取得
  const dates = getMonths(startYear, startMonth);

  // 次の1ヶ月分を表示するための関数
  const handleNextMonth = () => {
    const nextStartMonth = (startMonth % 12) + 1;
    const nextStartYear = startMonth === 12 ? startYear + 1 : startYear;
    setStartYear(nextStartYear);
    setStartMonth(nextStartMonth);
  };

  // 前の1ヶ月分を表示するための関数
  const handlePrevMonth = () => {
    const prevStartMonth = startMonth === 1 ? 12 : startMonth - 1;
    const prevStartYear = startMonth === 1 ? startYear - 1 : startYear;
    setStartYear(prevStartYear);
    setStartMonth(prevStartMonth);
  };

  return (
    <>
      <button className="p-2" onClick={handlePrevMonth}>
        &lt;
      </button>
      {dates.map((item, index) => (
        <th key={index}>{item}</th>
      ))}
      <button className="p-2" onClick={handleNextMonth}>
        &gt;
      </button>
    </>
  );
};

export default MonthNavigater;
