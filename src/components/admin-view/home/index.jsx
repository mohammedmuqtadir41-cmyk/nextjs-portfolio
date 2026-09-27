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
    <div className="mb-6">
      <p className="text-sm text-zinc-500">
        Update the content displayed in your portfolio hero section.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 sm:p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            ✦
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Hero Section
            </h3>

            <p className="text-sm text-zinc-500">
              Manage your introduction and career summary.
            </p>
          </div>
        </div>
      </div>

      <FormControl
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
);
}