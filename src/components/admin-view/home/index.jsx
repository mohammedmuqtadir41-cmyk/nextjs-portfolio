"use client";

const control = [
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

export default function AdminHomeView() {
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <button className="mt-1.25 border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md">
          Add Info
        </button>
      </div>
    </div>
  );
}
