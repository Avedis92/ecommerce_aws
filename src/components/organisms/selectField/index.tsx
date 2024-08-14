import React, { useId } from "react";
import { ISelectFieldProp } from "./types";
import { categories } from "../../../shared/constant";

const SelectField = ({ labelName, onChange, value }: ISelectFieldProp) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  const categorySelectionId = useId();
  return (
    <div className="box-border mb-8 min-w-96">
      <label
        className="block text-gray-400 font-bold text-xl text-left mb-4"
        htmlFor={categorySelectionId}
      >
        {labelName}:
      </label>
      <select
        className="block text-left w-24 h-8 text-xl border-2 border-gray-400"
        id={categorySelectionId}
        value={value}
        onChange={handleChange}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectField;
