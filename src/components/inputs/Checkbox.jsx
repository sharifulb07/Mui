import  React, {useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { FormControlLabel } from "@mui/material";

 const Checkbox1=()=>{
    const [checked, setChecked]=useState([true,false]);
const handleChange1=(event)=>{
    setChecked([event.target.checked,event.target.checked]);
}
const handleChange2=(event)=>{
    setChecked([event.target.checked,checked[1]]);
}
const handleChange3=(event)=>{
    setChecked([checked[0],event.target.checked]);
}


    const children=(
        <Box sx={{display:'flex', flexDirection:'column', ml:3 }}>
            <FormControlLabel
            label='child 1'
            control={<Checkbox checked={checked[0]}    onChange={handleChange2} />}
         
            />
            <FormControlLabel
            label='child 2'
            control={<Checkbox checked={checked[1]}   onChange={handleChange3} />}
          
            />

        </Box>
    )
    return(
        <>
        <FormControlLabel
        label="Parent"
        control={<Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0]!==checked[1]} onChange={handleChange1} />}
        />
        {children}
        
        </>
    )
 }

 export default Checkbox1;
// import { FormGroup, FormControlLabel } from "@mui/material";
// import { blue, pink, yellow } from "@mui/material/colors";
// import { Favorite,FavoriteBorder } from "@mui/icons-material";
// import BookmarkIcon from '@mui/icons-material/Bookmark';

// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// const label = { inputProps: { "aria-label": "checkbox-demo" } };

// const Checkboxes = () => {
//     const [checked,setChecked]=useState(true);

//     const handdleChange=(event)=>{
//         setChecked(event.target.checked);
//     }

//   return (
//     <>


// <Checkbox checked={checked} onChange={handdleChange}  inputProps={{'aria-label':'controlled'}} />




// {/* 
//     <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
//     <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} /> */}



// {/* 
//       <Checkbox {...label} defaultChecked  size="small"/>
//       <Checkbox {...label}  color="primary" />
//       <Checkbox {...label}  color="secondary" />
//       <Checkbox {...label}  color="warning" />
//       <Checkbox {...label}  color="success"  />
//       <Checkbox {...label}  sx={{color:blue[800],
    
//     '& .Mui-checked':{color:yellow[600]}
    
//     }} />
     
//       <Checkbox {...label} 
      
     
//       sx={{ '& .MuiSvgIcon-root': {fontSize:30} }}
      
//       />
//       <Checkbox {...label} disabled checked />

//       <div>
// <FormGroup>
//     <FormControlLabel control={<Checkbox defaultChecked />} label='label' />
//     <FormControlLabel disabled control={<Checkbox  />} label='Disabled' />
// </FormGroup>



//       </div> */}
//     </>
//   );
// };

// export default Checkboxes;
