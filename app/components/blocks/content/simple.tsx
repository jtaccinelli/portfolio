import type { ContentBlock as Content } from "@shared/sanity";
import { Link } from "@remix-run/react";
import { resolveSanityLink } from "@app/lib/sanity";

interface Props {
  content: Content;
}

export function ContentSimpleLayout({ content }: Props) {
  return (
    <div className="flex flex-col space-y-8 px-8 py-24 md:p-24">
      <h3 className="max-w-xl text-xl md:text-3xl">{content.heading}</h3>
      <p className="max-w-xl">{content.body}</p>
      <div className="flex flex-row space-x-4">
        {content.ctas.map((item) => (
          <Link key={item._key} to={resolveSanityLink(item.link)}>
            <p className="underline underline-offset-4">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
