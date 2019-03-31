import React from "react";
import "./SeasonsDisplay.scss";


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text:'Let\'s hit the beach',
        iconName:'sun'
    },
    winter: {
        text:'Burr, it is chilly',
        iconName:'snowflake'
    }
}


const SeasonsDisplay = (props) => {
    // const season = getSeason(props.lat, new Date().getMonth());
    const season = 'summer';
    const {text,iconName} = seasonConfig[season];
    // console.log(season);
    return (
        <div className={`season-display ${season}`}>
            {/* Season Display
                Latitude:{props.lat} */}
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonsDisplay;