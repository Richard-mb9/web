import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './index.css';

interface IProps {
    ico: any;
    textTitle: string;
    textContent: string;
}

export default function ServiceCard(props: IProps) {
    const { ico, textContent, textTitle } = props;
  return (
    <Card sx={{ minWidth: 275, maxWidth: 350, padding: "10px", margin: '10px' }}>
        <CardContent>
            {ico && (
                <div className='ico-card-container'>
                    {ico}
                </div >
            )}
            <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                {textTitle}
            </Typography>
            <Typography variant="body2">
                {textContent}
            </Typography>
        </CardContent>
    </Card>
  );
}