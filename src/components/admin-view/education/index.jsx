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

export default function AdminEducationView({
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

        {/* Existing Education */}
        <div className="mb-10 space-y-5">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Degree */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl">
                    🎓
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Degree
                    </p>

                    <h3 className="text-xl font-bold text-gray-800">
                      {item.degree}
                    </h3>
                  </div>
                </div>

                {/* Education Details */}
                <div className="grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-2">

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      College
                    </p>

                    <p className="mt-1 text-base font-semibold text-gray-700">
                      {item.college}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Completion Year
                    </p>

                    <p className="mt-1 text-base font-semibold text-gray-700">
                      {item.year}
                    </p>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-400 bg-white p-8 text-center">
              <p className="text-gray-600">
                🎓 No Education Data Available
              </p>
            </div>
          )}
        </div>

        {/* Education Form */}
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
          Add Education
        </button>
      </div>
    </div>
  );
}