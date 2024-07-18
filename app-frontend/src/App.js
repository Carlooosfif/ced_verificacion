import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [dob, setDob] = useState('');
  const [resultId, setResultId] = useState(null);
  const [resultAge, setResultAge] = useState(null);
  const [resultDate, setResultDate] = useState(null);

  const handleVerifyId = async () => {
    try {
      const idResponse = await axios.get(`http://localhost:3333/api/id/verify/${id}`);
      setResultId(idResponse.data);
    } catch (error) {
      console.error('Error during ID verification', error);
    }
  };

  const handleVerifyAge = async () => {
    try {
      const ageResponse = await axios.get(`http://localhost:3030/api/age/verify/${dob}`);
      setResultAge(ageResponse.data);
    } catch (error) {
      console.error('Error during age verification', error);
    }
  };

  const handleGetDate = async () => {
    try {
      const dateResponse = await axios.get(`http://localhost:3000/api/date/get`);
      setResultDate(dateResponse.data);
    } catch (error) {
      console.error('Error during date fetch', error);
    }
  };

  return (
    <div className="App">
      <h1>Verificación de Identidad y Edad</h1>
      <div>
        <input
          type="text"
          placeholder="Cédula"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleVerifyId}>Verificar Cédula</button>
        {resultId && (
          <div className="result">
            <h2>Resultado de Verificación de Cédula:</h2>
            <p className={resultId.real ? 'valid' : 'invalid'}>
              <span className="icon">{resultId.real ? '✔️' : '❌'}</span>
              ID Valida: {resultId.real ? 'Sí' : 'No'}
            </p>
          </div>
        )}
      </div>
      <div>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={handleVerifyAge}>Verificar Edad</button>
        {resultAge && (
          <div className="result">
            <h2>Resultado de Verificación de Edad:</h2>
            <p className="valid">Edad: {resultAge.currentAge}</p>
            <p className={resultAge.overAge ? 'valid' : 'invalid'}>
              <span className="icon">{resultAge.overAge ? '✔️' : '❌'}</span>
              Mayor de Edad: {resultAge.overAge ? 'Sí' : 'No'}
            </p>
          </div>
        )}
      </div>
      <div>
        <button onClick={handleGetDate}>Obtener Fecha Actual</button>
        {resultDate && (
          <div className="result">
            <h2>Fecha Actual:</h2>
            <p className="date-result">{resultDate.date}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
