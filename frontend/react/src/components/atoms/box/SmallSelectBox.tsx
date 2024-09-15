type SmallSelectBoxProps = {
  optionArray: string[];
  labelText?: string;
};

const SmallSelectBox = ({ optionArray, labelText }: SmallSelectBoxProps) => {
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
        defaultValue={optionArray[0]}
      >
        {optionArray.map(value => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </>
  );
};
export default SmallSelectBox;
