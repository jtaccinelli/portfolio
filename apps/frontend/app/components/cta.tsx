import { Link } from "@remix-run/react";

interface Props {
  label: string;
  link: string;
}

export function CallToAction({ label, link }: Props) {
  return (
    <Link to={link}>
      <p className="hover:border-accent-600 group flex flex-row items-center gap-2 border-b-2 border-gray-700 pb-2 transition-all">
        <span>{label}</span>
        <i className="bx bx-right-arrow-alt transition-transform group-hover:translate-x-1" />
      </p>
    </Link>
  );
}
