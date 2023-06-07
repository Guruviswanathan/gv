import React from 'react';
import './mp.css'
import bgImg from '../images/000.jpg';


export default function Consumer() {
  return (
    <>
      <h1  className='consumer'>Hi Consumer</h1>
      <div className="col-2">
    <img src={bgImg} alt="" />
</div>
    </>
  );
}