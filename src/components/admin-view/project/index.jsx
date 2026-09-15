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

        {/* Existing Projects */}
        <div className="mb-10 space-y-5">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Project Name */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl">
                    💻
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Project
                    </p>

                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4 border-t border-gray-200 pt-4">

                  {/* Website */}
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Website
                    </p>

                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block break-all text-blue-600 hover:underline"
                    >
                      {item.website}
                    </a>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Technologies
                    </p>

                    <p className="mt-1 text-base leading-relaxed text-gray-700">
                      {item.technologies}
                    </p>
                  </div>

                  {/* GitHub */}
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      GitHub
                    </p>

                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block break-all text-blue-600 hover:underline"
                    >
                      {item.github}
                    </a>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-400 bg-white p-8 text-center">
              <p className="text-gray-600">
                💻 No Project Data Available
              </p>
            </div>
          )}
        </div>

        {/* Project Form */}
        <FormControl
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Add Project */}
        <button
          className="mt-4 rounded-md bg-blue-600 px-5 py-3 text-[16px] font-bold text-white transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleSave}
        >
          Add Project
        </button>
      </div>
    </div>
  );
}