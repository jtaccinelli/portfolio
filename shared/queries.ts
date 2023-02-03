export const URL_FRAGMENT = `
"url": select(
    variant == "url" => url,
    reference->_type == "page" => "/" + reference->handle.current,
    reference->_type == "client" => "/clients/" + reference->handle.current,
    reference->_type == "skill" => "/skills/" + reference->handle.current,
    reference->_type == "project" => "/projects/" + reference->handle.current,
    reference->_type == "blog" => "/blogs/" + reference->handle.current,
    "/"
), 
`;

export const CONTENT_FRAGMENT = `
    content[]{
        ...,    
        ctas[]{
         ...,
         ${URL_FRAGMENT}
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
    connect[] {
        ...,
        ${URL_FRAGMENT}
    },
    items[] {
        ...,
        ${URL_FRAGMENT}
    }
}
`;

export const FOOTER_QUERY = `
*[_type == "footer"][0]{
    ...,
    links[] {
        ...,
        ${URL_FRAGMENT}
    }
}
`;

export const PAGE_QUERY = `
*[_type == "page" && handle.current == $handle][0]{
    ...,
    "handle": handle.current,
    ${CONTENT_FRAGMENT},
}
`;
