import React from 'react';
import Break from '../Break/Break';
import BtnCompleted from '../BtnCompleted/BtnCompleted';
import ExDetails from '../ExDetails/ExDetails';
import Profile from '../Profile/Profile';
import './Info.css'

const Info = () => {
    return (
        <div className='info'>
          <Profile></Profile>  
          <Break></Break>
          <ExDetails></ExDetails>
          <BtnCompleted></BtnCompleted>
        </div>
    );
};

export default Info;<Profile></Profile>