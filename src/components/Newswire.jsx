import React from 'react';
import { Card } from 'react-bootstrap';
import { data } from '../data/newswireData';

const Newswire = () => {
    return (
        <div className='d-flex flex-direction-row w-100 flex-wrap'>
            {data?.map((item) => (
                <Card className='flex-33.33 w-33.33' style={{ width: '18rem', backgroundColor: "black", margin: "3%" }}>
                    <Card.Img variant="top" src={item.pic} />
                    <Card.Body>
                        <div className='d-flex text-white'>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle className='my-1 mx-2'>{item.release_date}</Card.Subtitle>
                        </div>
                        <Card.Text className='h3 text-white my-5'>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Newswire;
