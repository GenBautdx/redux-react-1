//import logo from './logo.svg';
//import './App.css';
import React, {useState} from "react";
import Field from "./componests/Field";
import Translate from "./componests/Translate";
import Lenguages from "./componests/Lenguajes"

export default function App() {
  const [Lenguages,setLenguage] = useState('es');
  const [text, setText] = useState('');

  return(
    <div>
      <Field onChange={setText] />
      <Lenguages Lenguages={Lenguages} onChange={setLenguage} />
      <Translate text= {text} Lenguages={Lenguages} />
    </div>
  );
}

