import AddButton from "../../../../components/atoms/button/AddButton";
import Spacer from "../../../../components/atoms/Spacer";
import TableCaptionRow from "../../../../components/molecules/row/TableCaptionRow";
import { Outsource } from "../../../../types/project";
import Outsources from "../molecules/row/Outsources";
import OutsourcesHead from "../molecules/row/OutsourcesHeader";

type OutsourcingInfoProps = {
  OutsourceColumns: Array<{ label: string; width: number }>;
  outsourcingInfo: Outsource[];
  handleOutsourcingInfoInputChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  deleteOutsourcingInfoRow: (index: number) => void;
  handleAddOutsourcingInfoRow: () => void;
};

const OutsourcingInfo: React.FC<OutsourcingInfoProps> = ({
  OutsourceColumns,
  outsourcingInfo,
  handleOutsourcingInfoInputChange,
  deleteOutsourcingInfoRow,
  handleAddOutsourcingInfoRow,
}) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <table className="min-w-full divide-y">
        <thead>
          <TableCaptionRow value={"外注費登録"} />
          <OutsourcesHead columns={OutsourceColumns} />
        </thead>
        <Outsources
          formData={outsourcingInfo}
          handleInputChange={handleOutsourcingInfoInputChange}
          onDelete={deleteOutsourcingInfoRow}
        />
      </table>
      <div className="text-left mt-2 ml-4">
        <AddButton
          buttonText="追加"
          handleClick={handleAddOutsourcingInfoRow}
        />
        <Spacer height="10px" />
      </div>
    </div>
  );
};

export default OutsourcingInfo;
