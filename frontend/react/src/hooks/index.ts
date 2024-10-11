/**
 * 案件開始日~終了日を参照して期間内の日にちの配列を作成する関数
 */
export function getMonthsBetweenDates(
  start_date: Date,
  end_date: Date,
): string[] {
  const start = new Date(start_date);
  const end = new Date(end_date);

  const result = [];

  // startがendを超えるまでループ
  while (start <= end) {
    // 現在の年月を "YYYY-MM" の形式で配列に追加
    const year = start.getFullYear();
    const month = String(start.getMonth() + 1).padStart(2, "0"); // 月を2桁に
    result.push(`${year}/${month}`);

    // 次の月に進む
    start.setMonth(start.getMonth() + 1);
  }
  return result;
}
