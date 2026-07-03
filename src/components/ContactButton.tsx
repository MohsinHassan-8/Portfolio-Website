interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <a
      href="mailto:allaboutmohsin8@gmail.com"
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-[#EDE7DA] transition-transform duration-200 hover:scale-[1.03] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #4A3B2A 7%, #8B6F47 37%, #C9A876 72%, #4A6C6F 100%)',
        boxShadow:
          '0px 4px 4px rgba(139, 111, 71, 0.25), 4px 4px 12px #8B6F47 inset',
        outline: '2px solid #EDE7DA',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </a>
  );
}
