import React,{useState,useEffect, useContext} from 'react';
import { store } from '../App';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button} from 'reactstrap';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Card from './Card/Cards.js'
import './Exampage.css';
import Myprofile from './Myprofile';
import cprogramm from './Card/cprogramm.jpg';
import java from './Card/java.png';
import react from './Card/react.png';
// import cprogramme from './Components/Card/cpraogramm.jpg';
const ExamPage = () => {
  const[token,setToken] = useContext(store);
  const[data,setData]=useState(null)
  useEffect(()=>{
    axios.get("http://localhost:8000/ExamPage",{
      headers:
      {
        'x-token':token
      }
    }).then(
      res => setData(res.data)
    ).catch(err => console.log(err.message))
    
  },[])
  if(!token)
  {
    return<Redirect to="/login"/>
  }

  return <div className='exampage_head'>

          {
            data &&
            
              <div className='user_id'>
                  <PersonOutlineIcon/> :{data.username}
              </div>
          
          }
                
            <div className='Exam_subs'>
              <Card/>
                
            </div>
            <div>
                <Button onClick={()=> setToken(null)} color='danger'>Logout</Button>
                </div>
             
  </div>;
};

export default ExamPage;
