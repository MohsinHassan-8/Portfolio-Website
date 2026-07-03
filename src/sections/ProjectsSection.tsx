import FadeIn from '../components/FadeIn';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
