import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

export default function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex items-start justify-center">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="sticky top-24 md:top-32 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#C9A876] bg-ink p-4 sm:p-6 md:p-8"
      >
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-8">
          <span
            className="text-[#EDE7DA] font-black leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col gap-1 flex-1 min-w-[180px]">
            <span className="text-[#C9A876] text-xs sm:text-sm uppercase tracking-widest font-medium">
              {project.category}
            </span>
            <h3
              className="hero-heading font-black uppercase leading-none"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
            >
              {project.name}
            </h3>
          </div>
          <LiveProjectButton href={project.liveUrl} label={project.liveLabel} />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <img
            src={project.heroImage.src}
            alt={`${project.name} screenshot 1`}
            loading="lazy"
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            style={{ aspectRatio: project.heroImage.aspect, objectFit: 'cover' }}
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {project.secondaryImages.map((image, i) => (
              <img
                key={image.src}
                src={image.src}
                alt={`${project.name} screenshot ${i + 2}`}
                loading="lazy"
                className="w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
                style={{ aspectRatio: image.aspect, objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
