"use client";

export default function FormControl({ controls, formData, setFormData }) {
  return controls.map((controlItem) => (
    <div key={controlItem.name} className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {controlItem.label}
      </label>
      <input
        placeholder={controlItem.placeholder}
        name={controlItem.name}
        type={controlItem.type}
        value={formData[controlItem.name]}
        onChange={(e) => {
          setFormData({ ...formData, [controlItem.name]: e.target.value });
        }}
        className="w-full rounded border px-3 py-2 tracking-wide text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-emerald-300"
      ></input>
    </div>
  ));
}
