"use client";

import AdminHomeView from "@/src/components/admin-view/home";
import AdminContactView from "@/src/components/admin-view/contact";
import AdminEducationView from "@/src/components/admin-view/education";
import AdminExperienceView from "@/src/components/admin-view/experience";
import AdminProjectView from "@/src/components/admin-view/project";
import AdminAboutView from "@/src/components/admin-view/about";
import { useEffect, useState } from "react";
import { getData } from "@/src/services";
import { useRouter } from "next/navigation";

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

  const [allData, setAllData] = useState({});

  const router = useRouter();

  const handleLogout = async() => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    })

    const result = await response.json();

    console.log('LOGOUT RESULT:',result)

    if(result.success){
      router.push('/auth')
    }
  }

  const initialDataMap = {
    home: initialHomeViewFormData,
    about: initialAboutViewFormData,
    education: initialEducationViewFormData,
    experience: initialExperienceViewFormData,
    project: initialProjectViewFormData,
  };

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response?.data?.length > 0
    ) {
      setHomeViewFormData(response && response.data[0]);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response?.data &&
      response?.data?.length > 0
    ) {
      setAboutViewFormData(response && response.data[0]);
    }

    if (response.success) {
      setAllData({ ...allData, [currentSelectedTab]: response.data });
    }
  }

  console.log(allData, homeViewFormData, 'homeViewFormData');


  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

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
    id: "education",
    label: "Education",
    component: (
      <AdminEducationView
        currentSelectedTab={currentSelectedTab}
        formData={educationViewFormData}
        setFormData={setEducationViewFormData}
        initialFormData={initialDataMap.education}
        data={allData?.education}
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
        data={allData?.project}
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
        data={allData?.experience}
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
];

  return (
  <div className="min-h-screen">
    
    {/* Header */}
    <div className="flex items-center justify-between border-b border-gray-400 px-8 py-4">
      <h1 className="text-2xl font-bold text-black">
        Admin Dashboard
      </h1>

      <button
        type="button"
        onClick={handleLogout}
        className="rounded-md bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
      >
        Logout
      </button>
    </div>

    {/* Navigation */}
    <nav
      className="-mb-0.5 flex justify-center space-x-6 border-b border-gray-400"
      role="tablist"
    >
      {menuItem.map((Item) => (
        <button
          key={Item.id}
          type="button"
          className="p-4 text-xl font-bold text-black"
          onClick={() => setCurrentSelectedTab(Item.id)}
        >
          {Item.label}
        </button>
      ))}
    </nav>

    {/* Selected Section */}
    <div className="mt-10 p-10">
      {menuItem.map(
        (Item) =>
          Item.id === currentSelectedTab && Item.component
      )}
    </div>

  </div>
);
}