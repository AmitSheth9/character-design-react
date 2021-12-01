
import './App.css';
import { useState } from 'react';
import Dropdown from './Components/Dropdown/Dropdown';
import Display from './Components/Display/Display';
import PhraseDisplay from './Components/PhraseDisplay/PhraseDisplay';

function App() {

  

  const [head, setHead] = useState('Dog');
  const [middle, setMiddle] = useState('Blue');
  const [bottom, setBottom] = useState('White-Pants');
  const [input, setInput] = useState('');
  const [phrases, setPhrases] = useState([]);

  function handleSubmit (){
    setPhrases((prevState) => [...prevState, input]);
}
  return (
    <div >
      <Dropdown 
       head={head}
       setHead={setHead}
       middle={middle}
       setMiddle={setMiddle}
       bottom={bottom}
       setBottom={setBottom}
       input={input}
       setInput={setInput}
       phrases={phrases}
       setPhrases={setPhrases}
       handleSubmit={handleSubmit}
       />
       <div className='container'>
          <Display 
          head={head}
          middle={middle}
          bottom={bottom} 
          />
          <PhraseDisplay
          phrases={phrases}
          />
       </div>
    </div>
  );
}

export default App;
