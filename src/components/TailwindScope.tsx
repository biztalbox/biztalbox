import "@/styles/tailwind-tw.css";

type TailwindScopeProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

/**
 * Wrap Tailwind-powered routes so utilities only apply inside `[data-tw-scope]`.
 * Bootstrap / global SCSS outside this wrapper are unaffected.
 */
export default function TailwindScope({
  children,
  id,
  className,
}: TailwindScopeProps) {
  return (
    <div data-tw-scope={true} id={id} className={className}>
      {children}
    </div>
  );
}
