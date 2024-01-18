import React, { createContext, useState, PropsWithChildren } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface IConfig {
  duration?: number;
  type?: AlertType
}

const defaultValueContext = {
    openSnackbar: (message: string, config?: IConfig) => {},
    closeSnackbar: () => {}
}

const defaultType = "error";

const defaultDuration = 10000;

export const SnackbarContext = createContext(defaultValueContext);

export default function SnackBar({children}: PropsWithChildren<unknown>){
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')
    const [duration, setDuration] = useState(defaultDuration)
    const [type, setType] = useState<AlertType>(defaultType);

    const triggerSnackbar = (message: string, config?: IConfig) => {
        setMessage(message)
        setDuration(config?.duration || defaultDuration)
        setType(config?.type || 'error');
        setOpen(true)
      }

    const openSnackbar = (message: string, config?: IConfig) => {
        if (open === true) {
          setOpen(false)
        } else {
          triggerSnackbar(message, config)
        }
      }

    const closeSnackbar = () => {
        setOpen(false)
      }
    
    return (
        <SnackbarContext.Provider value={{openSnackbar, closeSnackbar}}>
            {children}
            <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
            open={open}
            onClose={closeSnackbar}
            autoHideDuration={duration}
        >
          <Alert severity={type}>{message}</Alert>
        </Snackbar>
        </SnackbarContext.Provider>
    )

} 
