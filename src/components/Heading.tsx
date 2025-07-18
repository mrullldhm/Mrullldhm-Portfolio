type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({children}:HeadingProps) {
  return <h2 className="text-3xl font-semibold capitalize mb-8 tracking-widest">{children}</h2>;
}
