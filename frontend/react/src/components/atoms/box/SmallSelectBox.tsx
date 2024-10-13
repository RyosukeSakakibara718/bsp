import { OptionList } from "../../../types/project";

type SmallSelectBoxProps = {
  optionArray: OptionList[];
  labelText?: string;
  between: {
    id: number;
    label: string;
  };
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SmallSelectBox: React.FC<SmallSelectBoxProps> = ({
  optionArray,
  labelText,
  between,
  onChange,
}) => {
  /**
   * セレクトボックス
   *
   * @param {SmallSelectBoxProps} props - セレクトボックスのコンポーネントのプロパティ。
   * @param {} props.optionArray - オプションの内容の配列です。セレクトボックスを展開した際に表示されます。
   * @returns {JSX.Element} 小さめのセレクトボックスを返します。
   */

  return (
    <>
      {labelText && <label className="mr-4">{labelText}</label>}
      <select
        className="border-2 rounded-lg pl-2 pr-5 py-1"
        name="dateSelect"
        id="dateSelect"
        value={between.id} // 選択された値を表示する
        onChange={onChange}
      >
        {optionArray.map(value => (
          <option key={value.id} value={value.id}>
            {" "}
            {/* value.idを使用 */}
            {value.label}
          </option>
        ))}
      </select>
    </>
  );
};
export default SmallSelectBox;
