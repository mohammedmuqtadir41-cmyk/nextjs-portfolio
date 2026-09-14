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

  const initialDataMap = {
    home: initialHomeViewFormData,
    about: initialAboutViewFormData,
    education: initialEducationViewFormData,
    experience: initialExperienceViewFormData,
    project: initialProjectViewFormData,
  };

  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          currentSelectedTab={currentSelectedTab}
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          initialFormData={initialDataMap.home}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          currentSelectedTab={currentSelectedTab}
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          initialFormData={initialDataMap.about}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: (
        <AdminContactView
          currentSelectedTab={currentSelectedTab}
          formData={contactViewFormData}
          setFormData={setContactViewFormData}
          initialFormData={initialDataMap.contact}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          currentSelectedTab={currentSelectedTab}
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          initialFormData={initialDataMap.education}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          currentSelectedTab={currentSelectedTab}
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
          initialFormData={initialDataMap.experience}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          currentSelectedTab={currentSelectedTab}
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
          initialFormData={initialDataMap.project}
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
