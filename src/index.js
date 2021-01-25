/* 
 * interagindo com a biblioteca ReactDOM.
 * DOM = Document Object Model, que é exatamente a estrutura da sua página (representado como uma árvore lógica)
*/

import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

// const el = document.getElementById('root')

/* é a partir do ReactDOM que é possível exibir algo na tela. 
 * existe o método ReactDOM.render para renderizar que recebe dois parâmetros: 
 * o primeiro parâmetro é o que eu quero renderizar na tela (conteúdo 'Olá React')
 * o segundo parâmetro vai ser o elemento no qual eu quero inserir esse conteúdo
*/

import App from './App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)