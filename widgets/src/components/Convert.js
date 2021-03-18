import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Convert = ({language, text}) => {
    useEffect(() => {

        axios.post('https://translation.googleapis.com/language/translate/v2', {});
        console.log('New Language or Text!')

    }, [language, text]);
    return <div />
}

export default Convert;