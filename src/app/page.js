import AboutClientView from "../components/client-view/about";
import ContactClientView from "../components/client-view/contact";
import ExperienceAndEducationClientView from "../components/client-view/experience";
import HomeClientView from "../components/client-view/home";
import ProjectClientView from "../components/client-view/project";

async function ExtractAllData(currentSection) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not configured."
    );
  }

  const res = await fetch(
    `${baseUrl}/api/${currentSection}/get`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch ${currentSection} data`
    );
  }

  const data = await res.json();

  return data?.data || [];
}

export default async function Home() {
  const homeSectionData =
    await ExtractAllData("home");

  const aboutSectionData =
    await ExtractAllData("about");

  const experienceSectionData =
    await ExtractAllData("experience");

  const educationSectionData =
    await ExtractAllData("education");

  const projectSectionData =
    await ExtractAllData("project");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="portfolio-grid absolute inset-0 opacity-40" />

        <div className="portfolio-glow left-[-250px] top-[100px]" />

        <div className="portfolio-glow bottom-[10%] right-[-250px]" />
      </div>

      <HomeClientView data={homeSectionData} />

      <AboutClientView data={aboutSectionData} />

      <ExperienceAndEducationClientView
        education={educationSectionData}
        experience={experienceSectionData}
      />

      <ProjectClientView data={projectSectionData} />

      <ContactClientView />
    </main>
  );
}