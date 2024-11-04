import React, { useState } from 'react';

const Altura = () => {
    const [pessoas, setPessoas] = useState([]);
    const [altura, setAltura] = useState('');
    const [genero, setGenero] = useState('');
    const [resultado, setResultado] = useState(null);

    const adicionarPessoa = () => {
        if (pessoas.length < 10) {
            setPessoas([...pessoas, { altura: Number(altura), genero: Number(genero) }]);
            setAltura('');
            setGenero('');
        }
    };

    const calcularEstatisticas = () => {
        let somaAlturaMulheres = 0;
        let somaAlturaTotal = 0;
        let contadorHomens = 0;
        let contadorMulheres = 0;
        let maiorAltura = 0;
        let menorAltura = Infinity;

        pessoas.forEach(({ altura, genero }) => {
            somaAlturaTotal += altura;

            if (genero === 0) {
                contadorHomens++;
            } else {
                contadorMulheres++;
                somaAlturaMulheres += altura;
            }

            if (altura > maiorAltura) maiorAltura = altura;
            if (altura < menorAltura) menorAltura = altura;
        });

        const mediaAlturaMulheres = contadorMulheres ? somaAlturaMulheres / contadorMulheres : 0;
        const mediaAlturaTotal = somaAlturaTotal / pessoas.length;
        const percentualHomens = (contadorHomens / pessoas.length) * 100;

        setResultado({
            maiorAltura,
            menorAltura,
            mediaAlturaMulheres,
            mediaAlturaTotal,
            percentualHomens,
        });
    };

    return (
        <div>
            <h2>Estatísticas de Altura</h2>
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Altura (m)"
            />
            <input
                type="number"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                placeholder="Gênero (0=masc, 1=fem)"
            />
            <button onClick={adicionarPessoa}>Adicionar Pessoa</button>
            <button onClick={calcularEstatisticas}>Calcular Estatísticas</button>

            {resultado && (
                <div>
                    <h3>Resultado:</h3>
                    <p>Maior altura: {resultado.maiorAltura} m</p>
                    <p>Menor altura: {resultado.menorAltura} m</p>
                    <p>Média de altura das mulheres: {resultado.mediaAlturaMulheres.toFixed(2)} m</p>
                    <p>Média de altura da população: {resultado.mediaAlturaTotal.toFixed(2)} m</p>
                    <p>Percentual de homens na população: {resultado.percentualHomens.toFixed(2)}%</p>
                </div>
            )}
        </div>
    );
};

export default Altura;
