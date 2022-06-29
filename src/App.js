import React from 'react';
import ItemsForm from './Calc/ItemsForm';
import InputForm from './Calc/InputForm';
import TableForm from './Calc/TableForm';






import './App.css';



function App() {
  return (
    
    <div className='styleApp'>
      <div>
        <TableForm/>
      </div>
      <div>
        <InputForm/>
      </div>
      <div>
        <ItemsForm/>
      </div>
    </div>

    
  );
}

export default App;
