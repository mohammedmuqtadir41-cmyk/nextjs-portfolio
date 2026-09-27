"use client";

export default function FormControl({
  controls,
  formData,
  setFormData,
}) {
  return (
    <div className="space-y-5">
      {controls.map((controlItem) => (
        <div key={controlItem.name}>
          <label
            htmlFor={controlItem.name}
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            {controlItem.label}
          </label>

          <input
            id={controlItem.name}
            name={controlItem.name}
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            value={formData[controlItem.name] ?? ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                [controlItem.name]: e.target.value,
              });
            }}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-200 focus:border-emerald-500/50 focus:bg-black/50 focus:ring-2 focus:ring-emerald-500/10"
          />
        </div>
      ))}
    </div>
  );
}