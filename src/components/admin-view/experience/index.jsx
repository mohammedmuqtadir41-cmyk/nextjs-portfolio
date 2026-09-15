"use client";

import { addData } from "@/src/services";
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

export default function AdminExperienceView({
  formData,
  setFormData,
  currentSelectedTab,
  initialFormData,
  data,
}) {
  // console.log(formData);

  const handleSave = async () => {
    const result = await addData(currentSelectedTab, formData);

    console.log("SAVE RESULT:", result);

    if (result.success) {
      setFormData(initialFormData);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 rounded bg-[#d7d7d7] px-8 pb-8 pt-6 shadow-md">
        <div className="mb-10 space-y-6">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffffff] flex flex-col gap-2 p-6 rounded-lg shadow-md border border-green-600 hover:border-green-800 transition duration-300"
              >
                <p className="text-lg font-semibold text-gray-700">
                  {item.position}
                </p>
                <p className="text-lg text-gray-700">
                  {item.company}
                </p>
                <p className="text-lg text-gray-700">
                  {item.duration}
                </p>
                <p className="text-lg text-gray-700">
                  {item.location}
                </p>
                <p className="text-lg text-gray-700">
                  {item.jobprofile}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 ">
              {" "}
              No Job Experience Available
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
          Add Experience
        </button>
      </div>
    </div>
  );
}
