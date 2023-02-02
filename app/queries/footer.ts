import { LINK_FRAGMENT } from "@app/queries/fragments";

export const FOOTER_QUERY = `*[_type == "footer"][0]{
    ...,
    links[]{
        ...,
        ${LINK_FRAGMENT}
    },
}`;
