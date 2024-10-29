import React, { useState } from "react";

type InputStringColumnProps = {
  title: string;
  name: string;
  value: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  required: boolean;
};

const InputStringColumn: React.FC<InputStringColumnProps> = ({
  title,
  name,
  value,
  handleInputChange,
  required
}) => {
  const [hasError, setHasError] = useState(false);

  const handleBlur = () => {
    // フォーカスが外れたときに、入力値が空ならエラーステートをtrueにする
    required? setHasError(value.trim() === ""): null;
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
            type="text"
            name={name}
            value={value}
            onChange={(e) => {
              handleInputChange(e);
              if (hasError && e.target.value.trim() !== "") {
                setHasError(false); // 入力があればエラー解除
              }
            }}
            onBlur={handleBlur}
            required={required}
            className={`border rounded p-2 w-fill-available text-xl ${
              hasError ? "border-red-500" : ""
            }`}
          />
        </td>
      </div>
    </div>
  );
};

export default InputStringColumn;
