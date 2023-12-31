import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            onSignIn: () => {
                //   console.log('User signed in');
                onSignIn()
            },
        });

        history.listen(onParentNavigate);
    }, []);

    return (
        <div id="_auth-dev-root" ref={ref} />
    )
}

export default AuthApp