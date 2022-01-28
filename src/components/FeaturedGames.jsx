import React from 'react';
import { Card } from 'react-bootstrap';

const FeaturedGames = () => {
    return <>
        <div className="h2 text-white text-align-center mx-6 my-3">Featured Games</div>
        <div className='d-flex flex-wrap'>
            <div className='w-10'><img className='w-50' src='https://media-rockstargames-com.akamaized.net/mfe2/sites-gta-trilogy/035f473/img/be50e86e4a053c675d18.jpg' alt='featured_games' /></div>
            <div className='w-20'><img className='w-50' src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg' alt='featured_games' /></div>
            <div className='w-20'><img className='w-50' src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/wallpapers/games/rdr2_rdo_frontierpursuits_tablet.jpg' alt='featured_games' /></div>
            <div className='w-20'><img className='w-50' src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg' alt='featured_games' /></div>
        </div>
    </>;
};

export default FeaturedGames;
