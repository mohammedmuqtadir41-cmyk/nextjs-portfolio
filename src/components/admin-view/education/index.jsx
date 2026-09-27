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

    if (result?.success) {
      setFormData(initialFormData);
    }
  };

  return (
    <div className="w-full">

      {/* Description */}
      <div className="mb-6">
        <p className="text-sm text-zinc-500">
          Manage your academic background and qualifications.
        </p>
      </div>

      {/* Existing Education */}
      <div className="mb-6 rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 sm:p-8">

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            🎓
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Education History
            </h3>

            <p className="text-sm text-zinc-500">
              Your existing academic qualifications.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:border-emerald-500/20 hover:bg-white/[0.04]"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  {/* Degree */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-lg">
                      🎓
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        Degree
                      </p>

                      <h4 className="mt-1 text-lg font-semibold text-white">
                        {item.degree}
                      </h4>

                      <p className="mt-1 text-sm text-zinc-400">
                        {item.college}
                      </p>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="sm:text-right">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Completion Year
                    </p>

                    <p className="mt-1 text-sm font-semibold text-emerald-400">
                      {item.year}
                    </p>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
              <div className="text-2xl">🎓</div>

              <p className="mt-3 text-sm font-medium text-zinc-300">
                No Education Data Available
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Add your first education entry below.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Education */}
      <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 sm:p-8">

        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            +
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Add Education
            </h3>

            <p className="text-sm text-zinc-500">
              Add a new academic qualification to your portfolio.
            </p>
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
            onClick={handleSave}
            className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
          >
            Add Education
          </button>
        </div>
      </div>
    </div>
  );
}