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

    if (result?.success) {
      setFormData(initialFormData);
    }
  };

  return (
    <div className="w-full">

      {/* Description */}
      <div className="mb-6">
        <p className="text-sm text-zinc-500">
          Manage the projects displayed in your portfolio.
        </p>
      </div>

      {/* Project History */}
      <div className="mb-6 rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 sm:p-8">

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            💻
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Projects
            </h3>

            <p className="text-sm text-zinc-500">
              Your portfolio projects and their links.
            </p>
          </div>
        </div>

        {/* Existing Projects */}
        <div className="space-y-4">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:border-emerald-500/20 hover:bg-white/[0.04]"
              >
                {/* Project Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-lg">
                      💻
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        Project
                      </p>

                      <h4 className="mt-1 text-lg font-semibold text-white">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="mt-5 grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-2">

                  {/* Website */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Live Website
                    </p>

                    {item.website ? (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block break-all text-sm text-emerald-400 transition-colors hover:text-emerald-300 hover:underline"
                      >
                        {item.website}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm text-zinc-600">
                        No website added
                      </p>
                    )}
                  </div>

                  {/* GitHub */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      GitHub
                    </p>

                    {item.github ? (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block break-all text-sm text-emerald-400 transition-colors hover:text-emerald-300 hover:underline"
                      >
                        {item.github}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm text-zinc-600">
                        No GitHub link added
                      </p>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="sm:col-span-2">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Technologies
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.technologies}
                    </p>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
              <div className="text-2xl">💻</div>

              <p className="mt-3 text-sm font-medium text-zinc-300">
                No Project Data Available
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Add your first project below.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Project */}
      <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/20 sm:p-8">

        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            +
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Add Project
            </h3>

            <p className="text-sm text-zinc-500">
              Add a new project to your portfolio.
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
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
}