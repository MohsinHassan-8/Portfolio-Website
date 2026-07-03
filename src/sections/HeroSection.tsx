import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: 'mailto:allaboutmohsin8@gmail.com' },
];

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        mountOnly
        className="flex items-center justify-between px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8"
      >
        <div className="flex gap-3 sm:gap-6 md:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#EDE7DA] font-medium uppercase tracking-wide sm:tracking-wider text-[0.65rem] sm:text-sm md:text-lg lg:text-[1.4rem] whitespace-nowrap transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/MohsinHassan-8/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#EDE7DA] transition-opacity duration-200 hover:opacity-70 flex-shrink-0 ml-2"
        >
          <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center relative">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40} mountOnly>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10vw] sm:text-[9.5vw] md:text-[9vw] lg:text-[8.5vw]">
              Hi, i&apos;m mohsin
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20} mountOnly>
          <p
            className="text-[#EDE7DA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an ai/ml engineer building rag systems, fine-tuned llms, and deep learning solutions that ship
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} mountOnly>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}