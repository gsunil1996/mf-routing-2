import { mount } from 'page_not_found/pageNotFoundApp';
import React, { useRef, useEffect } from 'react';

const PageNotFoundApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return (
        <div ref={ref} />
    )
}

export default PageNotFoundApp