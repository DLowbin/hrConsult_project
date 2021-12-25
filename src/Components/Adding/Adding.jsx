import React from 'react';
import { useState } from 'react';

function Adding() {
   const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
   const [value, setValue] = useState('');
   
   const result = arr.map((element, index) => {
      return <p key={index}>{element}</p>;
   });

   function add() {
      setArr([...arr, value]);
   }

   function inputValue(event) {
      setValue(event.target.value);
   }

   return (
            <div>
            {result}
            <input value={value} onChange={inputValue} />
            <input onClick={add} />
            </div>
   )
   
}

export default Adding;