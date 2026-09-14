"use client";

import FormControl from "../form-controls";
import { addData } from "@/src/services";

const controls = [
  {
    name: "degree",
    placeholder: "Enter your degree",
    type: "text",
    label: "Degree",
  },
  {
    name: "year",
    placeholder: "Enter completion year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "Enter college name",
    type: "text",
    label: "College",
  },
];

export default function AdminEducationView({ formData, setFormData, currentSelectedTab, initialFormData }) {
  // console.log(formData);

  const handleSave = async() => {
    const result = await addData(currentSelectedTab , formData);

    console.log("SAVE RESULT:", result);

    if(result.success){
      setFormData(initialFormData)
    }
  }

  return (
    <div className="w-full">
      <div className="mb-4 rounded bg-[#d7d7d7] px-8 pb-8 pt-6 shadow-md">
        <FormControl
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <button className="mt-1.25 rounded-md border border-blue-600 bg-blue-600 p-3 text-[16px] font-bold text-white focus:bg-green-800"
        onClick={handleSave}>
          Add Education
        </button>
      </div>
    </div>
  );
}