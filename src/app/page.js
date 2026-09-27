import About from "@/src/models/About";
import Education from "@/src/models/Education";
import Experience from "@/src/models/Experience";
import Home from "@/src/models/Home";
import Project from "@/src/models/Project";
import connectToDB from "@/src/database";

import AboutClientView from "../components/client-view/about";
import ContactClientView from "../components/client-view/contact";
import ExperienceAndEducationClientView from "../components/client-view/experience";
import HomeClientView from "../components/client-view/home";
import ProjectClientView from "../components/client-view/project";

async function getPortfolioData() {
  await connectToDB();

  const [
    homeSectionData,
    aboutSectionData,
    experienceSectionData,
    educationSectionData,
    projectSectionData,
  ] = await Promise.all([
    Home.find({}).sort({ updatedAt: -1 }).lean(),
    About.find({}).sort({ updatedAt: -1 }).lean(),
    Experience.find({}).lean(),
    Education.find({}).lean(),
    Project.find({}).lean(),
  ]);

  return {
    home: JSON.parse(JSON.stringify(homeSectionData)),
    about: JSON.parse(JSON.stringify(aboutSectionData)),
    experience: JSON.parse(JSON.stringify(experienceSectionData)),
    education: JSON.parse(JSON.stringify(educationSectionData)),
    project: JSON.parse(JSON.stringify(projectSectionData)),
  };
}

export default async function HomePage() {
  const data = await getPortfolioData();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="portfolio-grid absolute inset-0 opacity-40" />

        <div className="portfolio-glow left-[-250px] top-[100px]" />

        <div className="portfolio-glow bottom-[10%] right-[-250px]" />
      </div>

      <HomeClientView data={data.home} />

      <AboutClientView data={data.about} />

      <ExperienceAndEducationClientView
        education={data.education}
        experience={data.experience}
      />

      <ProjectClientView data={data.project} />

      <ContactClientView />
    </main>
  );
}