import React from 'react';
import Banner from './Banner';
import OwnSection from './OwnSection';
import Summary from './Summary';
import WeAre from './WeAre';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WeAre></WeAre>
            <OwnSection></OwnSection>
            <Summary></Summary>
        </div>
    );
};

export default Home;