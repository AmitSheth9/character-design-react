
import './App.css';
import { useState } from 'react';
import Dropdown from './Components/Dropdown/Dropdown';
import Display from './Components/Display/Display';
import PhraseDisplay from './Components/PhraseDisplay/PhraseDisplay';

function App() {

  const headArr = ['Duck', 'Bird', 'Dog', 'Horse'];
  const middleArr = ['Blue', 'Fancy', 'Pink','Red'];
  const bottomArr = ['Single-Leg', 'White-Pants', 'Blue-Jeans'];

  const [head, setHead] = useState('Dog');
  const [middle, setMiddle] = useState('Blue');
  const [bottom, setBottom] = useState('White-Pants');

  const [phrases, setPhrases] = useState([]);
  return (
    <div >
      <Dropdown 
       title='Head' 
       headArr={headArr}
       middleArr={middleArr} 
       bottomArr={bottomArr} 
       head={head}
       setHead={setHead}
       middle={middle}
       setMiddle={setMiddle}
       bottom={bottom}
       setBottom={setBottom}
       phrases={phrases}
       setPhrases={setPhrases}
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
