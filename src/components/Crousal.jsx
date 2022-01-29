import React from 'react';
import { Button } from 'react-bootstrap';
import { data } from '../data/crousalData';

const Crousal = () => {
    return <div className='d-flex flex-wrap'>
        {data?.map((item) => (
            <>
                <div style={{width: '71%'}}><img style={{width: '100%'}} src={item.url} alt='crousal_pic' /></div>
                <div className='text-white'>
                    <div>{item.game_title}</div>
                    <div>{item.title}</div>
                    <div className='h1'><Button variant='outlined' className='text-white border-light'>WATCH NOW</Button></div>
                    <div></div>
                </div>
            </>
        ))}
  </div>;
};

export default Crousal;
