"use client";

import FormControl from "../form-controls";
import { addData } from "@/src/services";

const controls = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Enter heading text",
  },
  {
    name: "summary",
    placeholder: "Enter Career text",
    type: "text",
    label: "Enter career text",
  },
];

export default function AdminHomeView({
  formData,
  setFormData,
  currentSelectedTab,
  initialFormData,
}) {
  const handleSave = async () => {
    const result = await addData(currentSelectedTab, formData);

    console.log("SAVE RESULT:", result);

    if (result.success) {
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