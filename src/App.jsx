import { Button, Container, Rating , Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';


const labels= {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

 const App =()=> {
  const [rating , setRating] = useState(2.5);
  const [value, setValue] = useState(2.5);
  const [hover, setHover] = useState(-1);
  return (
      <>
         <CssBaseline color="primary"/>
         <Container  sx={{ bgcolor: 'text.secondary' , mt: "auto", paddingBottom: 5,  paddingTop: 5, width: 500  }}>

           <Checkbox  
             defaultChecked
             sx={{
              '& .MuiSvgIcon-root': { fontSize: 38 },
              
             }}
             color="success"
            />
           <Checkbox  color="secondary" checked icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
           
           <Checkbox
            sx={{ color: 'error.main' }}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
           />
           <Checkbox checked size='small'/> 
           <Checkbox id='agree' defaultChecked /> <label htmlFor='agree'>I agree</label>

           <Rating
            precision={0.5}
            name="simple-controlled"
            value={rating}
            onChange={(_, value)=> setRating(value)}
            // readOnly 
            />

            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(_, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}


           <br /> <Button variant='outlined' >Test Button 1</Button> <br /><br />
           <Button variant='contained' >Test Button 2</Button>

         </Container>
      </>
  );
}

export default App;