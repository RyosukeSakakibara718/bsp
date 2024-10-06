export function countBusinessDaysInMonth(dateString: string) {
  // 引数の形式は "YYYY/MM/DD" を想定
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth(); // 0始まりなので、月はそのまま使用する
  const holidays: string[] = []; // 祝日がある場合はここに "YYYY-MM-DD" の形式で追加

  let businessDays = 0;

  // 月の最初の日と最後の日を取得
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0); // 翌月の0日目は今月の最終日

  // 月初から月末までループして営業日をカウント
  for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
    const dayOfWeek = day.getDay();
    const formattedDate = day.toISOString().split("T")[0];

    // 月曜日から金曜日であり、祝日リストに含まれていない場合
    if (
      dayOfWeek !== 0 &&
      dayOfWeek !== 6 &&
      !holidays.includes(formattedDate)
    ) {
      businessDays++;
    }
  }

  return businessDays;
}
