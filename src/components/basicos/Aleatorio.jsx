import React from "react";

export default props => {

    /*
     * const min = props.min;
     * const max = props.max;
     */
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Retorna um número aleatório maior ou igual a {min} e menor que {max}</strong>
            </p>
            <p>
                <strong>(modificado com o refresh da página)</strong>
            </p>
            <p>
                <strong>Número Sorteado :</strong> {aleatorio}
            </p>
        </div >
    );
};