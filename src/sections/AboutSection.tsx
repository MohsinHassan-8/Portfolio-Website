import { Network, Database, Layers, Terminal } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_TEXT =
  "I'm a computer science graduate specializing in generative AI and machine learning, I build end-to-end systems: from fine-tuned transformer models to retrieval-augmented chatbots deployed in production. My final year project, VERITAS, was a large-scale comparative study across nearly every embedding technique in NLP. Let's build something intelligent together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-ink"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] left-[2%] md:left-[4%] text-[#C9A876]"
      >
        <Network className="w-[100px] sm:w-[130px] md:w-[160px] h-auto" strokeWidth={0.8} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] left-[6%] md:left-[10%] text-[#C9A876]"
      >
        <Database className="w-[90px] sm:w-[120px] md:w-[150px] h-auto" strokeWidth={0.8} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] right-[2%] md:right-[4%] text-[#C9A876]"
      >
        <Layers className="w-[100px] sm:w-[130px] md:w-[160px] h-auto" strokeWidth={0.8} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] right-[6%] md:right-[10%] text-[#C9A876]"
      >
        <Terminal className="w-[100px] sm:w-[130px] md:w-[160px] h-auto" strokeWidth={0.8} />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#EDE7DA] font-medium text-center leading-relaxed max-w-[600px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 flex items-center gap-6">
        <ContactButton />
        <a
          href="https://github.com/MohsinHassan-8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EDE7DA] font-medium uppercase tracking-widest text-xs sm:text-sm underline underline-offset-4 decoration-[#C9A876]/50 transition-opacity duration-200 hover:opacity-70"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
