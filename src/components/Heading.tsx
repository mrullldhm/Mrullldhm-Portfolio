type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-950 leading-tight">
        {children}
      </h2>
      <div className="h-px w-16 bg-neutral-950 mt-5"></div>
    </div>
  );
}
