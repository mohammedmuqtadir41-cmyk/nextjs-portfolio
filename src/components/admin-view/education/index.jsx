"use client";

import FormControl from "../form-controls";

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

export default function AdminEducationView({ formData, setFormData }) {
  // console.log(formData);

  return (
    <div className="w-full">
      <div className="mb-4 rounded bg-[#d7d7d7] px-8 pb-8 pt-6 shadow-md">
        <FormControl
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <button className="mt-1.25 rounded-md border border-blue-600 bg-blue-600 p-3 text-[16px] font-bold text-white focus:bg-green-800">
          Add Education
        </button>
      </div>
    </div>
  );
}