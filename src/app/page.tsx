import Hero from "./component/hero";
import Contact from "./component/contact";
import Projects from "./component/projects";
import About from "./component/about";
import Skills from "./component/skills";


export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/> 
      <Contact/>
      <Skills/>
    </div> 
  );
}
