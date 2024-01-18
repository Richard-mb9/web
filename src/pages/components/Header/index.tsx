import React from 'react';

import './index.css';
import Button from "@mui/material/Button";
import Logo from '../../../static/images/logo3-white.png';
import { useRedirect } from '../../../context/Redirect';
import TokenManager from '../../../commons/TokenManager';

export default function Header(){
    const [ redirect ] = useRedirect();

    const logOut = ()=>{
        TokenManager.clear();
        redirect("/login");
    }

    return(
        <header>
            <div className='logo'>
                <img className="logo-image" src={Logo} alt="Logo" />
                {/* <span className='name'>Sua Page</span> */}
            </div>
            {TokenManager.isAuthenticated() ? (
                <Button
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, border: 'solid 1px white', color: 'white', ":hover": {border: 'solid 2px white'}}}
                    onClick={() => logOut()}
                    >
                        LOG OUT
                    </Button>
                ) : (
                    <Button
                        variant="outlined"
                        sx={{ mt: 3, mb: 2, border: 'solid 1px white', color: 'white', ":hover": {border: 'solid 2px white'}}}
                        onClick={() => redirect('/login')}
                    >
                        LOGIN
                    </Button>
                )
            }
        </header>
    )
}