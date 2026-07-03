import { motion } from 'framer-motion';
import type { ReactNode, ElementType, CSSProperties } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /**
   * If true, animates in as soon as the component mounts instead of waiting
   * for an IntersectionObserver "in view" trigger. Use this for above-the-fold
   * content (hero section) — some Android WebView / stock browsers (common on
   * Xiaomi/Huawei devices) have unreliable IntersectionObserver support, which
   * can leave `whileInView` elements permanently stuck at opacity: 0.
   */
  mountOnly?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  style,
  mountOnly = false,
}: FadeInProps) {
  const MotionTag = motion.create(as as ElementType);

  const revealProps = mountOnly
    ? { animate: { opacity: 1, x: 0, y: 0 } }
    : {
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: '50px', amount: 0 },
      };

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      {...revealProps}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}