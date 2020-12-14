import React from 'react';
//import Moment from 'react-moment';
import moment from 'moment';

const Timer = () => {
    return ( moment().format("HH:mm:ss") );
}

export default React.memo(Timer);
//export default Timer;