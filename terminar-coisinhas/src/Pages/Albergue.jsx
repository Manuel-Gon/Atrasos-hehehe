import React, { useState } from 'react';

const Albergue = () => {
    const [dias, setDias] = useState(0);
    const [resultado, setResultado] = useState(null);

    const calcularConta = () => {
        let precoPorDia;
        if (dias <= 5) {
            precoPorDia = 100;
        } else if (dias <= 10) {
            precoPorDia = 90;
        } else {
            precoPorDia = 80;
        }

        const valorTotal = dias * precoPorDia;
        const descontoEmocional = valorTotal * 0.10;
        const valorComDesconto1 = valorTotal - descontoEmocional;
        const descontoAssociacao = valorComDesconto1 * 0.15;
        const valorComDesconto2 = valorComDesconto1 - descontoAssociacao;
        const valorFinal = valorComDesconto2 + 150; // multa

        setResultado({
            valorTotal,
            descontoEmocional,
            valorComDesconto1,
            descontoAssociacao,
            valorComDesconto2,
            valorFinal,
        });
    };

    return (
        <div>
            <h2>Calculadora de Conta do Albergue</h2>
            <input
                type="number"
                value={dias}
                onChange={(e) => setDias(Number(e.target.value))}
                placeholder="Número de diárias"
            />
            <button onClick={calcularConta}>Calcular</button>

            {resultado && (
                <div>
                    <h3>Resultado:</h3>
                    <p>Valor total sem desconto: R$ {resultado.valorTotal.toFixed(2)}</p>
                    <p>Desconto emocional: R$ {resultado.descontoEmocional.toFixed(2)}</p>
                    <p>Valor após desconto emocional: R$ {resultado.valorComDesconto1.toFixed(2)}</p>
                    <p>Desconto por associação: R$ {resultado.descontoAssociacao.toFixed(2)}</p>
                    <p>Valor após desconto por associação: R$ {resultado.valorComDesconto2.toFixed(2)}</p>
                    <p>Valor final com multa: R$ {resultado.valorFinal.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default Albergue;
