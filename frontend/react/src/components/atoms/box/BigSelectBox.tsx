type BigSelectBoxProps = {
  optionArray: string[];
  labelText?: string;
};

const BigSelectBox = ({ optionArray, labelText }: BigSelectBoxProps) => {
  /**
   * セレクトボックス
   *
   * @param {SmallSelectBoxProps} props - セレクトボックスのコンポーネントのプロパティ。
   * @param {} props.optionArray - オプションの内容の配列です。セレクトボックスを展開した際に表示されます。
   * @returns {JSX.Element} 大きめのセレクトボックスを返します。
   */

  return (
    <>
      {labelText && <label className="mr-4">{labelText}</label>}
      <select
        className="border-2 rounded-lg pl-5 pr-20 py-3 text-left"
        name="dateSelect"
        id="dateSelect"
        defaultValue={optionArray[0]}
      >
        {optionArray.map(value => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </>
  );
};
export default BigSelectBox;
