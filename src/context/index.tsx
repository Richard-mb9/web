import React, { PropsWithChildren } from 'react';


import SnackbarContextProvider from './Alert/alert';
import RedirectContextProvider from './Redirect/redirect';


export function GlobalContext({children}: PropsWithChildren<unknown>){
    return (
        <RedirectContextProvider>
            <SnackbarContextProvider>
                {children}
            </SnackbarContextProvider>
        </RedirectContextProvider>
    )
}