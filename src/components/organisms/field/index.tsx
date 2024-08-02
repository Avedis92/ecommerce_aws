import React from "react";
import { IField } from "../../../shared/types";

const Field = ({
  labelName,
  placeholder,
  onChange,
  value,
  error,
  type,
}: IField) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="box-border mb-8">
      <label
        htmlFor={labelName}
        className="block text-gray-400 font-bold text-xl mb-4 text-left"
      >
        {labelName}:
      </label>
      <input
        id={labelName}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        type={type}
        className="block text-left w-11/12 h-8 text-xl"
      />
      {error && (
        <p className="text-lg font-bold text-red-500 text-left">{error}</p>
      )}
    </div>
  );
};
export default Field;
