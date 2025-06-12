import Intro from "@/components/Intro";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div id="home">
        <Intro />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}