import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container, Row,Col} from 'reactstrap'
import cprogramm from './cprogramm.jpg';
import java from './java.png';
import react from './react.png';
import {Link} from 'react-router-dom';
import './Card.css';
const Cards = () => {
  return <div className='card_header'>
    <div className='card'>
                    <div className='image_container'>
                              <img src={cprogramm} alt="c programme"/>
                          </div>
                          <div className='card_title'>
                                C language
                          </div>
                          <div className='card_body'>
                          The C Language is developed by Dennis Ritchie for creating system applications that directly interact with the hardware devices such as drivers, kernels
                          </div>
                          <div className='card_start'>
                                <a href="./C.js"><Button color='primary'>START</Button></a>
                          </div>
               
      </div>              
      
        <div className='card'>
                          <div className='image_container'>
                              <img src={java} alt="Java"/>
                          </div>
                          <div className='card_title'>
                                java programme
                          </div>
                          <div className='card_body'>
                          Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers
                          </div>
                          <div className='card_start'>
                             <a href='C.js'><Button color='primary'>START</Button></a> 
                            </div>    
        </div> 
         <div className='card'>
                                  <div className='image_container'>
                                      <img src={react} alt="react"/>
                                  </div>
                                  <div className='card_title'>
                                      ReactJS
                                  </div>
                                  <div className='card_body'>
                                  React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data change
                                  </div>
                                  <div className='card_start'>
                                        <Button color='primary'>START</Button>
                                    </div> 
         </div>
        
          
        

  </div>;
};

export default Cards;
