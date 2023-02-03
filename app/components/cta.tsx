import { Link } from "@remix-run/react";

interface Props {
  label: string;
  link: string;
}

export function CallToAction({ label, link }: Props) {
  return (
    <Link to={link}>
      <p className="group flex flex-row items-center space-x-2 border-b border-white pb-2">
        <span>{label}</span>
        <i className="bx bx-right-arrow-alt transition-transform group-hover:translate-x-1" />
      </p>
    </Link>
  );
}
