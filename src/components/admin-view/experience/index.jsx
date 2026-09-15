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

        {/* Existing Experience */}
        <div className="mb-10 space-y-5">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Position & Company */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl">
                    💼
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Position
                    </p>

                    <h3 className="text-xl font-bold text-gray-800">
                      {item.position}
                    </h3>

                    <p className="text-base font-medium text-gray-600">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-2">

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Duration
                    </p>

                    <p className="mt-1 text-base font-semibold text-gray-700">
                      {item.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Location
                    </p>

                    <p className="mt-1 text-base font-semibold text-gray-700">
                      {item.location}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-sm font-medium text-gray-500">
                      Job Profile
                    </p>

                    <p className="mt-1 text-base leading-relaxed text-gray-700">
                      {item.jobprofile}
                    </p>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-400 bg-white p-8 text-center">
              <p className="text-gray-600">
                💼 No Job Experience Available
              </p>
            </div>
          )}
        </div>

        {/* Experience Form */}
        <FormControl
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Save Button */}
        <button
          className="mt-4 rounded-md bg-blue-600 px-5 py-3 text-[16px] font-bold text-white transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleSave}
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}