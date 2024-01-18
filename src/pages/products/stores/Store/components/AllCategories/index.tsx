import { Button } from '@mui/material';
import './index.css';
import CategoryCard from '../CategoryCard';

import { MicrophoneSVG, MusicSVG, ScreenSVG, CameraSVG, GamingSVG, VideoCameraSVG } from '../../../../../../static/Svgs';

const categories = [
    {
        ico: <MicrophoneSVG color='blue'/>,
        categoryName: "Headphones", 
    },
    {
        ico: <MusicSVG color='blue'/>,
        categoryName: "Beats", 
    },
    {
        ico: <ScreenSVG color='blue'/>,
        categoryName: "Notebooks", 
    },
    {
        ico: <CameraSVG color='blue'/>,
        categoryName: "Cameras", 
    },
    {
        ico: <GamingSVG color='blue'/>,
        categoryName: "Gaming", 
    },
    {
        ico: <VideoCameraSVG color='blue'/>,
        categoryName: "Video", 
    },
]


export default function AllCategories(){
    return(
        <div className='all-categories-container'>
            <div className='text-context'>
                <h1>Escolha seu produto por categoria</h1>
                <h2>Compre instrumentos musicais & acessórios online</h2>
                <h2>Com Segurança e Conforto</h2>
                <Button variant='contained' sx={{margin: '20px', padding: 2}}>Vert Todas as Categorias</Button>
            </div>
            <div className='cards'>
                {categories.map((category)=>(
                    <CategoryCard ico={category.ico} categoryName={category.categoryName} />
                ))}
                
            </div>
        </div>
    )
}