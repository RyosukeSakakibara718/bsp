import React, { useState } from "react";

type InputNumberColumnProps = {
  title: string;
  name: string;
  value: number | undefined;
  moneyFlug?: boolean;
  costFlug?: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  required: boolean;
};

const InputNumberColumn: React.FC<InputNumberColumnProps> = ({
  title,
  name,
  value,
  moneyFlug,
  costFlug,
  handleInputChange,
  required
}) => {
  const [hasError, setHasError] = useState(false);

  const handleBlur = () => {
    setHasError(value === undefined || value <= 0);
  };

  return (
    <div className="flex py-2">
      <div className="w-1/2">
        <td className="p-2 font-bold text-left">{required? `${title}※` : title}</td>
      </div>
      <div className="w-1/2">
        <td className="w-1/2">
          {hasError
            ?(<p className="text-red-500 flex justify-start">必須項目です</p>)
            : null
          }
          <input
            type="number"
            name={name}
            min={0}
            value={value === 0 ? undefined : value}
            placeholder={moneyFlug ? "¥" : costFlug ? "人/日" : ""}
            onChange={(e) => {
              handleInputChange(e);
              if (hasError && e.target.value.trim() !== "") {
                setHasError(false); // 入力があればエラー解除
              }
            }}
            onBlur={handleBlur}
            required
            className={`border rounded p-2 w-fill-available text-xl ${
              hasError ? "border-red-500" : ""
            }`}
          />
        </td>
      </div>
    </div>
  );
};

export default InputNumberColumn;
