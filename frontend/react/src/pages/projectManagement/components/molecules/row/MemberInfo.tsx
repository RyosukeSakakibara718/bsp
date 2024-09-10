import TableInputNumField from "../../../../../components/atoms/field/TableInputNumField";
import TableSelectField from "../../../../../components/atoms/field/TableSelecField";

const memberInfo = () => {
  const memberName = [
    { value: "山田 涼介", label: "山田 涼介" },
    { value: "山下 智久", label: "山下 智久" },
  ];

  const rank = [
    { value: "PM", label: "PM" },
    { value: "PL", label: "PL" },
    { value: "PG", label: "PG" },
  ];
  // TODO 月の工数入力の横スクロールの実装が思いつかなかったので一旦
  return (
    <>
      <tbody>
        <tr className="font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap">
          <TableSelectField options={memberName} width={"10%"} />
          <TableSelectField options={rank} width={"10%"} />
          <td colSpan={2}></td>
          <TableInputNumField width={"10%"} suffix="人/月" />
        </tr>
      </tbody>
    </>
  );
};

export default memberInfo;
