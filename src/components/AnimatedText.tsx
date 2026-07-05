import { useRef, Fragment } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalLength = text.length;
  const words = text.split(' ');

  // Running index over the *original* string (including spaces) so each
  // character's scroll-reveal timing matches its true position in the text.
  let globalIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split('').map((char, ci) => {
          const i = globalIndex;
          globalIndex += 1;
          const start = i / totalLength;
          const end = start + 1 / totalLength;
          return <Character key={ci} char={char} progress={scrollYProgress} start={start} end={end} />;
        });

        // Consume the index position for the space that followed this word.
        if (wi < words.length - 1) {
          globalIndex += 1;
        }

        return (
          <Fragment key={wi}>
            {/* whiteSpace: 'nowrap' keeps every letter of a word glued together,
                so the browser can only wrap the line at the real space below. */}
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>{chars}</span>
            {wi < words.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </p>
  );
}

function Character({
  char,
  progress,
  start,
  end,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>{char}</motion.span>
    </span>
  );
}