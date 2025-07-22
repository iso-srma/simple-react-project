
import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import './App.css';


function App() {
  
  const[p , setP] = React.useState(0);
   const[t , setT] = React.useState(0);
    const[r , setR] = React.useState(0);
    const[si , setSi] = React.useState(0);
const calculateSI = () => {
    const simpleInterest = (p * t * r) / 100;
    setSi(simpleInterest);
};

  return (
    <div className='div'>


      <AppBar  position="static">

        <Toolbar>
  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple interest calculator
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
         <br />
     <br />
     <TextField onChange={(e) => setP(e.target.value)}  label="Enter principle amount" variant="outlined" />   <br />
     <br />
     <TextField  onChange={(e) => setT(e.target.value)}  id="outlined-basic" label="Enter  Time" variant="outlined" />   <br />
     <br />
     <TextField  onChange={(e) => setR(e.target.value)}  id="outlined-basic" label="Enter Rate" variant="outlined" />
     <br />
     <br />
     <Button onClick={calculateSI} variant="contained">Calculate</Button>   <br />
     <br />
         <Typography variant="h6" gutterBottom>
           
        The simple interest is :: {si}
      </Typography>
         <br />
     <br />
  
    </div>
  );

}
export default App;