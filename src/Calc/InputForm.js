import { Box, TextField, Typography } from '@mui/material';
import { fontWeight } from '@mui/system';
import React from 'react';
import {useDispatch} from 'react-redux';
import { setValue } from '../Calc/Slice'
import { red } from '@mui/material/colors';





function InputForm() {
    const dispath = useDispatch ()
    function onChange (value) {
        dispath(setValue(value))
        if (value==='-')
        alert('Не занимайтесь ерундой! Вводите положительные числа!')
    }

    return ( 
        <div className='style2'>
            <Box
                sx={{'&>:not(style)':{m:0, width:'20ch', fontWeight:'bold'}}}>  
            <label for="Income"> Ваш среднемесячный доход:   </label> 
             <input
                    id="Income" 
                    label="Введите Ваш среднемесячный доход, $:" 
                    variant="filled"
                    maxLength= '5'
                    defaultValue={0}
                    onChange={(e) => onChange(e.target.value)}>
             </input>
            <label for="Income"> $ </label>
            </Box>                 
        </div>
    )
}

export default InputForm




