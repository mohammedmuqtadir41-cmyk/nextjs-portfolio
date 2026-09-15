"use client";

import FormControl from "../form-controls";
import { addData } from "@/src/services";

const controls = [
  {
    name: "aboutme",
    placeholder: "Enter About Me",
    type: "text",
    label: "Enter About Me",
  },
  {
    name: "noofprojects",
    placeholder: "Number of projects",
    type: "text",
    label: "Number of projects",
  },
  {
    name: "yearsofexperience",
    placeholder: "Years of experience",
    type: "text",
    label: "Years of experience",
  },
  {
    name: "noofclients",
    placeholder: "Number of clients",
    type: "text",
    label: "Number of clients",
  },
  {
    name: "skills",
    placeholder: "Skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({
  formData,
  setFormData,
  currentSelectedTab,
  initialFormData,
}) {
  const handleSave = async () => {
    console.log("Saving:", formData);

    const result = await addData(currentSelectedTab, formData);

    console.log("SAVE RESULT:", result);

    if (result?.success) {
      setFormData(initialFormData);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 rounded-lg bg-[#d7d7d7] px-8 pb-8 pt-6 shadow-md">
        
        <FormControl
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <button
          className="mt-4 rounded-md bg-blue-600 px-5 py-3 text-[16px] font-bold text-white transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleSave}
        >
          Add Info
        </button>

      </div>
    </div>
  );
}