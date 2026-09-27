"use client";

import FormControl from "../form-controls";
import { addData } from "@/src/services";

const controls = [
  {
    name: "aboutme",
    placeholder: "Enter About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "Number of projects",
    type: "text",
    label: "Number of Projects",
  },
  {
    name: "yearsofexperience",
    placeholder: "Years of experience",
    type: "text",
    label: "Years of Experience",
  },
  {
    name: "noofclients",
    placeholder: "Number of clients",
    type: "text",
    label: "Number of Clients",
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
      {/* Description */}
      <div className="mb-6">
        <p className="text-sm text-zinc-500">
          Manage your introduction, experience statistics, and technical
          skills.
        </p>
      </div>

      {/* About Card */}
      <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 sm:p-8">

        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            👤
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              About Section
            </h3>

            <p className="text-sm text-zinc-500">
              Update the information displayed in your portfolio.
            </p>
          </div>
        </div>

        {/* Form */}
        <FormControl
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Save */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}