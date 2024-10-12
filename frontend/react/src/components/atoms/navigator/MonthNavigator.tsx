type MonthNavigaterProps = {
  between: {
    id: number;
    label: string;
  };
  showPeriod: {
    dayOfWeek: number;
    day: string;
  }[];
  handleNext: () => void;
  handlePrev: () => void;
};

const MonthNavigater: React.FC<MonthNavigaterProps> = ({
  between,
  showPeriod,
  handleNext,
  handlePrev,
}) => {
  // 現在の日付から初期値を設定
  return (
    <>
      <th>
        <button className="p-2 w-[0px]" onClick={handlePrev}>
          &lt;
        </button>
      </th>
      {showPeriod.map((date, index) => {
        let style = {};
        if (between.id === 1) {
          // 日曜日はdayOfWeekが1、土曜日はdayOfWeekが7
          if (date.dayOfWeek === 1) {
            style = { color: "#EA7777" }; // 日曜日のスタイル
          } else if (date.dayOfWeek === 7) {
            style = { color: "#78C6DE" }; // 土曜日のスタイル
          }
        }
        return (
          <th key={index} style={style} className="w-[10%]">
            {date.day}
            {between.id !== 1 && ' ~'}
          </th>
        );
      })}
      <th>
        <button className="p-2 w-[0px]" onClick={handleNext}>
          &gt;
        </button>
      </th>
    </>
  );
};

export default MonthNavigater;