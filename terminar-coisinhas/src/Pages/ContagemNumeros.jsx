import React, { useState } from 'react';

const ContagemNumeros = () => {
    const [numero, setNumero] = useState('');
    const [numerosDigitados, setNumerosDigitados] = useState([]);
    const [resultado, setResultado] = useState(null);

    const adicionarNumero = () => {
        if (numero) {
            setNumerosDigitados([...numerosDigitados, Number(numero)]);
            setNumero('');
        }
    };

    const calcularResultado = () => {
        const contagem = numerosDigitados.filter(num => num > 100 && num < 200).length;
        setResultado(contagem);
    };

    return (
        <div>
            <h2>Contagem de Números entre 100 e 200</h2>
            <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Digite um número"
            />
            <button onClick={adicionarNumero}>Adicionar Número</button>
            <button onClick={calcularResultado}>Mostrar Resultado</button>

            {resultado !== null && (
                <div>
                    <h3>Resultado:</h3>
                    <p>Números entre 100 e 200: {resultado}</p>
                </div>
            )}
        </div>
    );
};

export default ContagemNumeros;
