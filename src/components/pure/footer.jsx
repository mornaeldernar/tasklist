import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

const Footer = () => {
    return (
        <Typography variant="body2" color="GrayText" align="center">
            { 'Copyright (c)' }
            <Link color="inherit" href="https://www.psdmx.com">
                Performance Software Developers
            </Link>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    );
}

export default Footer;
