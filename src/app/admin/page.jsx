"use client";

import AdminHomeView from "@/src/components/admin-view/home";
import AdminContactView from "@/src/components/admin-view/contact";
import AdminEducationView from "@/src/components/admin-view/education";
import AdminExperienceView from "@/src/components/admin-view/experience";
import AdminLoginView from "@/src/components/admin-view/login";
import AdminProjectView from "@/src/components/admin-view/project";
import AdminAboutView from "@/src/components/admin-view/about";
import { useState } from "react";

const initialHomeViewFormData = {
  heading: "",
  summary: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeViewFormData);

  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: <AdminHomeView
      formData = {homeViewFormData}
      setFormData= {setHomeViewFormData}
      />,
    },
    {
      id: "about",
      label: "About",
      component: <AdminAboutView />,
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView />,
    },
    {
      id: "education",
      label: "Education",
      component: <AdminEducationView />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <AdminExperienceView />,
    },
    // {
    //   id: "login",
    //   label: "Login",
    //   component: <AdminLoginView />,
    // },
    {
      id: "project",
      label: "Project",
      component: <AdminProjectView />,
    },
  ];

  return (
    <div className="border-b border-gray-400">
      {/* <h1 className="text-3xl font-bold text-red-500">Tailwind is working!</h1> */}
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItem.map((Item) => (
          <button
            key={Item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => setCurrentSelectedTab(Item.id)}
          >
            {Item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItem.map(
          (Item) => Item.id === currentSelectedTab && Item.component,
        )}
      </div>
    </div>
  );
}
