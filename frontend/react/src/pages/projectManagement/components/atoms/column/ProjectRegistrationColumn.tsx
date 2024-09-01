import React from "react";

const InputBox: React.FC<{
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="border rounded p-2 w-full"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputBox;
