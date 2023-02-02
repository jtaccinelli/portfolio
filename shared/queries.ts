export const LINK_FRAGMENT = `
link {
    ...,
    reference->{
        _type,
        "handle": handle.current
    }
}
`;

export const CONFIGURATION_QUERY = `
*[_type == "configuration"][0]{
    ...
}
`;

export const NAVIGATION_QUERY = `
*[_type == "navigation"][0]{
    ...,
    connect[]{
        ...,
        ${LINK_FRAGMENT}
    },
    items[]{
        ...,
        ${LINK_FRAGMENT}
    }
}
`;

export const FOOTER_QUERY = `
*[_type == "footer"][0]{
    ...,
    links[]{
        ...,
        ${LINK_FRAGMENT}
    },
}
`;
