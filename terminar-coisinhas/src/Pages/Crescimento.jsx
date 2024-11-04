import React, { useState } from 'react';

const Crescimento = () => {
    const [resultado, setResultado] = useState('');

    const calcularCrescimento = () => {
        let alturaValentina = 1.50; // em metros
        let alturaEnzo = 1.40; // em metros
        const crescimentoValentina = 0.02; // em metros por ano
        const crescimentoEnzo = 0.03; // em metros por ano
        let anos = 0;

        while (alturaEnzo <= alturaValentina) {
            alturaValentina += crescimentoValentina;
            alturaEnzo += crescimentoEnzo;
            anos++;
        }

        setResultado(`Enzo será mais alto que Valentina em ${anos} anos.`);
    };

    return (
        <div>
            <h2>Crescimento de Valentina e Enzo</h2>
            <button onClick={calcularCrescimento}>Calcular</button>
            {resultado && <p>{resultado}</p>}
        </div>
    );
};

export default Crescimento;

