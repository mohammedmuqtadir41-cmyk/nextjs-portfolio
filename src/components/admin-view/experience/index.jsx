"use client";

import FormControl from "../form-controls";

const controls = [
  {
    name: "position",
    placeholder: "Enter your position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Enter company name",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Enter duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Enter job location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Enter job profile",
    type: "text",
    label: "Job Profile",
  },
];

export default function AdminExperienceView({ formData, setFormData }) {
  console.log(formData);

  return (
    <div className="w-full">
      <div className="mb-4 rounded bg-[#d7d7d7] px-8 pb-8 pt-6 shadow-md">
        <FormControl
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <button className="mt-1.25 rounded-md border border-blue-600 bg-blue-600 p-3 text-[16px] font-bold text-white focus:bg-green-800">
          Add Info
        </button>
      </div>
    </div>
  );
}