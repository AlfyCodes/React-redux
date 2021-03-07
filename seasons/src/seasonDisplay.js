import React from 'react'

const getSeason = (lat, month) => {

    if (month > 2 && month < 9)
    {
        return lat > 0 ? 'Summer, summer time!' : 'Brrrr it\'s cold in here!';
    }
    else 
    {
        return lat > 0 ? 'Brrrr its Cold!' : 'Ahhh yes Summer!';
    }

}

const SeasonDisplay = (props) => {
   
    const season = getSeason(props.lat, new Date().getMonth());

    console.log(season)

    return <div>Season Display</div>

};

export default SeasonDisplay;
