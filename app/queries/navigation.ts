import { LINK_FRAGMENT } from "@app/queries/fragments";

export const NAVIGATION_QUERY = `*[_type == "navigation"][0]{
    ...,
    connect[]{
        ...,
        ${LINK_FRAGMENT}
    },
    items[]{
        ...,
        ${LINK_FRAGMENT}
    }
}`;
