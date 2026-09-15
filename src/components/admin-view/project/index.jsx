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

export default function AdminProjectView({
  formData,
  setFormData,
  currentSelectedTab,
  initialFormData,
  data,
}) {
  async function handleSave() {
    const result = await addData(currentSelectedTab, formData);

    console.log("SAVE RESULT:", result);

    if (result.success) {
      setFormData(initialFormData);
    }
  }

  return (
    <div className="w-full">
      <div className="mb-4 rounded bg-[#d7d7d7] px-8 pb-8 pt-6 shadow-md">
        <div className="mb-10 space-y-6">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 rounded-lg border border-green-600 bg-[#ffffff] p-6 shadow-md transition duration-300 hover:border-green-800"
              >
                <p className="text-lg font-semibold text-gray-700">
                  {item.name}
                </p>

                <p className="text-lg text-gray-700">{item.website}</p>

                <p className="text-lg text-gray-700">{item.technologies}</p>

                <p className="text-lg text-gray-700">{item.github}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No Project Data Available
            </p>
          )}
        </div>

        <FormControl
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <button
          className="mt-1.25 rounded-md border border-blue-600 bg-blue-600 p-3 text-[16px] font-bold text-white focus:bg-green-800"
          onClick={handleSave}
        >
          Add Project
        </button>
      </div>
    </div>
  );
}
