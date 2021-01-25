import React from "react"

export default function ComParametro(props) {
    const status = props.nota >= 7 ? "Aprovado" : "Recuperação"; //operador ternário
    const notaInt = Math.ceil(props.nota); //ceil = arredonda o número para o inteiro maior ou igual ao número
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {notaInt} </strong>
                e está
                <strong> {status}</strong>!
            </p>
        </div>
    );
}