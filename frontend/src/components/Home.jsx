import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';
import axios from 'axios';


const Home = () => {
  var navigate = useNavigate();
  var [blogs, setBlogs]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/get")
    .then((res)=>{
      setBlogs(res.data);
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
    .then((res)=>{
      console.log(res);
      alert(res.data);
      window.location.reload();
    })
    .chatch((err)=>{
      console.log(err)

    })
  };

  const handleUpdate=(val)=>{
    console.log(`value=${val}`)
    navigate('/add',{state:val})
  }

  return (
    <div id='home'>
      
      {blogs.map((val,i)=>{
        return(
          
      <div>
          <div className='cards' key={i}>
              <Card sx={{ maxWidth: 300, minWidth: 300 }} >
              <CardMedia
                component="img"
                alt="blog image"
                height="140"
                image= {val.img_url}
                className='blogimage'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.title}
                  
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {val.content}
                  
                  
                </Typography>
              </CardContent>
              <CardActions>
                <Button id='cardbutton' variant='contained' size="small" onClick={()=>{handleDelete(val._id)}}>DELETE</Button>
                <Button id='cardbutton' variant='contained' size="small" onClick={()=>{handleUpdate(val)}}>UPDATE</Button>
              </CardActions>
            </Card>
          </div>
          </div>
        )
      })}

    </div>
  )
}

export default Home
