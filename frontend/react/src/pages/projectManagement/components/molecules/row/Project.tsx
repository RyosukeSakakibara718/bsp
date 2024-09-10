import TableInputDate from "../../../../../components/atoms/field/TableInputDateField";
import TableInputField from "../../../../../components/atoms/field/TableInputField";
import TableInputNumField from "../../../../../components/atoms/field/TableInputNumField";
import TableSelectField from "../../../../../components/atoms/field/TableSelecField";

const Project = () => {
  const isDateField = (field: string) =>
    field === "開始日" || field === "終了日";
  const isCurrencyField = (field: string) =>
    field === "見積原価" || field === "受注額";
  const isEffortField = (field: string) => field === "見積工数";
  const isPhaseField = (field: string) => field === "作業フェーズ";

  const projectLabel = [
    { label: "案件名", label2: "作業フェーズ" },
    { label: "freeeプロジェクトID", label2: "受注額" },
    { label: "開始日", label2: "見積原価" },
    { label: "終了日", label2: "見積工数" },
  ];

  const phaseOptions = [
    { value: "要件定義", label: "要件定義" },
    { value: "基本設計", label: "基本設計" },
    { value: "詳細設計", label: "詳細設計" },
    { value: "製造", label: "製造" },
    { value: "単体試験", label: "単体試験" },
    { value: "結合試験", label: "結合試験" },
    { value: "総合試験", label: "総合試験" },
    { value: "リリース", label: "リリース" },
    { value: "終了", label: "終了" },
  ];

  const renderInputField = (field: string) => {
    if (isDateField(field)) {
      return <TableInputDate labelText={field} width="50%" />;
    } else if (isCurrencyField(field)) {
      return <TableInputField labelText={field} width="50%" placeholder="¥" />;
    } else if (isEffortField(field)) {
      return (
        <TableInputNumField labelText={field} width="50%" suffix="人/月" />
      );
    } else if (isPhaseField(field)) {
      return (
        <TableSelectField
          labelText={field}
          width="50%"
          options={phaseOptions}
        />
      );
    } else {
      return <TableInputField labelText={field} width="50%" />;
    }
  };

  return (
    <>
      {projectLabel.map((item, index) => (
        <tr
          key={index}
          className="font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap"
        >
          <td>{renderInputField(item.label)}</td>
          <td>{item.label2 && renderInputField(item.label2)}</td>
        </tr>
      ))}
    </>
  );
};

export default Project;
