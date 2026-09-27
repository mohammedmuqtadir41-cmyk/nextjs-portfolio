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
  <div className="min-h-screen bg-[#050505] text-white">
    {/* Header */}
    <header className="border-b border-white/10 bg-[#080808]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
            Portfolio CMS
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            Admin Dashboard
          </h1>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-400 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300"
        >
          Logout
        </button>
      </div>
    </header>

    {/* Navigation */}
    <nav
      className="sticky top-0 z-20 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl"
      role="tablist"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-3 scrollbar-hide lg:px-8">
        {menuItem.map((Item) => {
          const isActive = currentSelectedTab === Item.id;

          return (
            <button
              key={Item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setCurrentSelectedTab(Item.id)}
              className={`relative whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-emerald-500/15 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.08)]"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {Item.label}

              {isActive && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-emerald-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>

    {/* Main Content */}
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mb-8">
        <p className="text-sm text-zinc-500">
          Manage your portfolio content
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          {menuItem.find((item) => item.id === currentSelectedTab)?.label}
        </h2>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 shadow-2xl shadow-black/20 sm:p-6">
        {menuItem.map(
          (Item) =>
            Item.id === currentSelectedTab && (
              <div key={Item.id}>{Item.component}</div>
            )
        )}
      </section>
    </main>
  </div>
);
}