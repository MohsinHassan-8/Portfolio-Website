interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = 'Live Project',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#EDE7DA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#EDE7DA] transition-colors duration-200 hover:bg-[#EDE7DA]/10 ${className}`}
    >
      {label}
    </a>
  );
}
