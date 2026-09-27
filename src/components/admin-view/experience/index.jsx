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

    if (result?.success) {
      setFormData(initialFormData);
    }
  };

  return (
    <div className="w-full">

      {/* Description */}
      <div className="mb-6">
        <p className="text-sm text-zinc-500">
          Manage your professional experience and work history.
        </p>
      </div>

      {/* Experience History */}
      <div className="mb-6 rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 sm:p-8">

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            💼
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Experience History
            </h3>

            <p className="text-sm text-zinc-500">
              Your professional roles and work experience.
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
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-lg">
                      💼
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        Position
                      </p>

                      <h4 className="mt-1 text-lg font-semibold text-white">
                        {item.position}
                      </h4>

                      <p className="mt-1 text-sm font-medium text-emerald-400">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="sm:text-right">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Duration
                    </p>

                    <p className="mt-1 text-sm font-semibold text-zinc-300">
                      {item.duration}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-5 grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-2">

                  {/* Location */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      {item.location}
                    </p>
                  </div>

                  {/* Job Profile */}
                  <div className="sm:col-span-2">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Job Profile
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.jobprofile}
                    </p>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
              <div className="text-2xl">💼</div>

              <p className="mt-3 text-sm font-medium text-zinc-300">
                No Experience Data Available
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Add your first experience entry below.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Experience */}
      <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 sm:p-8">

        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            +
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Add Experience
            </h3>

            <p className="text-sm text-zinc-500">
              Add a new professional experience entry.
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
            Add Experience
          </button>
        </div>
      </div>
    </div>
  );
}