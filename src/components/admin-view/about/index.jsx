'use client'

import FormControl from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "Enter About Me",
    type: "text",
    label: "Enter About Me",
  },
  {
    name: "noofprojects",
    placeholder: "Number of projects",
    type: "text",
    label: "Number of projects",
  },
  {
    name: "yearsofexperience",
    placeholder: "Years of experience",
    type: "text",
    label: "Years of experience",
  },
  {
    name: "noofclients",
    placeholder: "Number of clients",
    type: "text",
    label: "Number of clients",
  },
  {
    name: "Skills",
    placeholder: "Skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({formData,setFormData}) {
    console.log(formData)
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControl 
            controls={controls}
            formData={formData}
            setFormData={setFormData}
        />
        <button className="mt-1.25 border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md">
          Add Info
        </button>
      </div>
    </div>
  );
}