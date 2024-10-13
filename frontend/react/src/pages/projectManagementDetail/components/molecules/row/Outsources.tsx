import React from "react";

import TrashButton from "../../../../../components/atoms/button/TrashButton";

type outsources = {
  name: string;
  estimate_cost: number | undefined;
  cost: number | undefined;
};

type OutsourcesProps = {
  formData: outsources[];
  handleInputChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onDelete: (index: number) => void;
};

const Outsources: React.FC<OutsourcesProps> = ({
  formData,
  handleInputChange,
  onDelete,
}) => {
  return (
    <tbody>
      {formData.map((item, index) => (
        <tr
          key={index}
          className="font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap"
        >
          <td>
            <td
              className={`font-bold px-4 py-3 text-left text-gray-800 w-full`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="text"
                name="name"
                value={item.name}
                placeholder=""
                onChange={e => handleInputChange(index, e)}
                className="border rounded p-2 w-fill-available text-xl"
              />
            </td>
          </td>
          <td>
            <td
              className={`font-bold px-4 py-3 text-left text-gray-800 w-full`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="number"
                name="estimate_cost"
                value={item.estimate_cost}
                placeholder="¥"
                onChange={e => handleInputChange(index, e)}
                className="border rounded py-2 w-fill-available text-xl"
              />
            </td>
          </td>
          <td>
            <td
              className={`font-bold px-4 py-3 text-left text-gray-800 w-full`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="number"
                name="cost"
                value={item.cost}
                placeholder="¥"
                onChange={e => handleInputChange(index, e)}
                className="border rounded py-2 w-fill-available text-xl"
              />
            </td>
          </td>
          <td>
            <TrashButton onDelete={() => onDelete(index)} row={index} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Outsources;
