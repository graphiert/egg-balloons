const buttonClass =
  "whitespace-nowrap rounded-radius bg-surface-dark border border-surface-dark px-4 py-2 text-sm font-medium tracking-wide text-on-surface-dark transition hover:opacity-75 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-dark active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-surface dark:border-surface dark:text-on-surface dark:focus-visible:outline-surface";

export default function Button({ href, children }) {
  return (
    <a href={href} className={buttonClass}>
      {children}
    </a>
  );
}
