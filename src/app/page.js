import AboutClientView from "../components/client-view/about";
import ContactClientView from "../components/client-view/contact";
import ExperienceAndEducationClientView from "../components/client-view/experience";
import HomeClientView from "../components/client-view/home";
import ProjectClientView from "../components/client-view/project";

async function ExtractAllData(currentSection) {
  const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  return data && data.data;
}
export default async function Home() {
  const homeSectionData = await ExtractAllData("home");
  const aboutSectionData = await ExtractAllData("about");
  // const contactSectionData = await ExtractAllData("contact");
  const experienceSectionData = await ExtractAllData("experience");
  const educationSectionData = await ExtractAllData("education")
  const projectSectionData = await ExtractAllData("project");
  return (
    <div>
    <HomeClientView data={homeSectionData}/>
    <AboutClientView data={aboutSectionData}/>
    {/* <ContactClientView data={contactSectionData}/> */}
    <ExperienceAndEducationClientView education={educationSectionData} experience={experienceSectionData}/>
    <ProjectClientView data={projectSectionData}/>
    </div>
  )
}
