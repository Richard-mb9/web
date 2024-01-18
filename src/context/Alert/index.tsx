import {useContext} from 'react';
import { IConfig, SnackbarContext, AlertType } from './alert';

export function useAlert(){
    const { openSnackbar, closeSnackbar } = useContext(SnackbarContext)

    const open = (message: string, config?: IConfig) => {
        openSnackbar(message, config)
    }

    return {showAlert: open, closeSnackbar}
}

export type {AlertType}