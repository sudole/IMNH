import React from 'react';
import {Link} from "react-router-dom";

import {getArrLastItem} from "../utils/common";

const Weather = (props) => {
    const weathers = [
        {'text': '맑음', 'icon': '🌞'},
        {'text': '흐림', 'icon': '☁'},
        {'text': '비', 'icon': '⛈'}
    ]
    const w_index = getArrLastItem(window.location.pathname.split('/'));

    return (
        <>
            <div>
                <h1>{weathers[w_index].text}</h1>
                {weathers[w_index].icon}
            </div>

            <Link to="/">뒤로가기</Link>
        </>
    )
}

export default Weather;