import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MicrophoneSVG } from '../../../../../../static/Svgs';

import './index.css';

interface IProps {
    ico: JSX.Element;
    categoryName: string
}

export default function CategoryCard(props: IProps) {
    const { ico, categoryName } = props;

  return (
    <Card className="card-category">
        <CardContent className='card-category-content'>
            <div className='card-ico'>
                <div className='circle-avatar'></div>
                {ico}
            </div>
            <Typography className='category-name' variant="h5" component="div" textAlign='center'>
                {categoryName}
            </Typography>
        </CardContent>
    </Card>
  );
}

