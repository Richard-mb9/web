import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import './index.css';
import Header from '../components/Header';

export default function Plans() {
  return (
    <div className='content'>
        <Header />
        <div className='cards'>
            <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: 2,
            }}
            >
                <Card size="lg" variant="outlined">
                    <Chip size="sm" variant="outlined" color="neutral">
                        PARA QUEM QUER FAZER APENAS UM TESTE
                    </Chip>
                    <Typography level="h2">3 MESES</Typography>
                    <Divider inset="none" />
                    <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                        <ListItem>
                            <ListItemDecorator>
                            <Check />
                            </ListItemDecorator>
                            Virtual Credit Cards
                        </ListItem>
                        <ListItem>
                            <ListItemDecorator>
                            <Check />
                            </ListItemDecorator>
                            Financial Analytics
                        </ListItem>
                        <ListItem>
                            <ListItemDecorator>
                            <Check />
                            </ListItemDecorator>
                            Checking Account
                        </ListItem>
                        <ListItem>
                            <ListItemDecorator>
                            <Check />
                            </ListItemDecorator>
                            API Integration
                        </ListItem>
                    </List>
                    <Divider inset="none" />
                    <CardActions>
                        <Typography level="title-lg" sx={{ mr: 'auto' }}>
                            R$ 150,00{' '}
                        </Typography>
                        <Button
                            variant="soft"
                            color="neutral"
                            endDecorator={<KeyboardArrowRight />}
                        >
                            COMEÇAR AGORA
                        </Button>
                    </CardActions>
                </Card>
                <Card
                    size="lg"
                    variant="solid"
                    color="neutral"
                    invertedColors
                    sx={{ bgcolor: 'neutral.900' }}
                >
                    <Chip size="sm" variant="outlined">
                    MAIS POPULAR
                    </Chip>
                    <Typography level="h2">1 ANO</Typography>
                    <Divider inset="none" />
                    <List
                    size="sm"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        mx: 'calc(-1 * var(--ListItem-paddingX))',
                    }}
                    >
                    <ListItem>
                        <ListItemDecorator>
                        <Check />
                        </ListItemDecorator>
                        Virtual Credit Cards
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                        <Check />
                        </ListItemDecorator>
                        Financial Analytics
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                        <Check />
                        </ListItemDecorator>
                        Checking Account
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                        <Check />
                        </ListItemDecorator>
                        API Integration
                    </ListItem>
                    </List>
                    <Divider inset="none" />
                    <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                        R$ 350,00{' '}
                    </Typography>
                    <Button endDecorator={<KeyboardArrowRight />}>COMEÇAR AGORA</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    </div>
    
  );
}