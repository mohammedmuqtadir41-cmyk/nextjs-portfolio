"use client";

import { addData } from "@/src/services";
import FormControl from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Enter project name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "website",
    placeholder: "Enter project website",
    type: "text",
    label: "Website",
  },
  {
    name: "technologies",
    placeholder: "Enter technologies used",
    type: "text",
    label: "Technologies",
  },
  {
    name: "github",
    placeholder: "Enter GitHub URL",
    type: "text",
    label: "GitHub",
  },
];

export default function AdminProjectView({ formData, setFormData, currentSelectedTab }) {
  // console.log(formData);

  async function handleSave(){
    const result = await addData(currentSelectedTab, formData);

    console.log("SAVE RESULT:", result);
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
          Add Project
        </button>
      </div>
    </div>
  );
}