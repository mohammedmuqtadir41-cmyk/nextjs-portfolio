"use client";

import AdminHomeView from "@/src/components/admin-view/home";
import AdminContactView from "@/src/components/admin-view/contact";
import AdminEducationView from "@/src/components/admin-view/education";
import AdminExperienceView from "@/src/components/admin-view/experience";
import AdminProjectView from "@/src/components/admin-view/project";
import AdminAboutView from "@/src/components/admin-view/about";
import { useState } from "react";

const initialHomeViewFormData = {
  heading: "",
  summary: "",
};

const initialAboutViewFormData = {
  aboutme: "",
  noofprojects: "",
  yearsofexperience: "",
  noofclients: "",
  skills: "",
};

const initialExperienceViewFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialEducationViewFormData = {
  degree: "",
  year: "",
  college: "",
};

const initialContactViewFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialProjectViewFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");


  const [homeViewFormData, setHomeViewFormData] = useState(
    initialHomeViewFormData,
  );

  const [aboutViewFormData, setAboutViewFormData] = useState(
    initialAboutViewFormData,
  );

  const [contactViewFormData, setContactViewFormData] = useState(
    initialContactViewFormData,
  );

  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectViewFormData,
  );

  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationViewFormData,
  );

  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceViewFormData,
  );

  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: (
        <AdminContactView
          formData={contactViewFormData}
          setFormData={setContactViewFormData}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
        />
      ),
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
