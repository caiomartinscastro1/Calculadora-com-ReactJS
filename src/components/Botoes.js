function Botoes({setValor , valor}){
    return(
        <>
            <table>
                <tr>
                    <td><button onClick={() => setValor(valor + '(')}>(</button></td>
                    <td><button onClick={() => setValor(valor + ')')}>)</button></td>
                    <td><button onClick={() => setValor(valor + '%')}>%</button></td>
                    <td><button onClick={() => setValor('')}>AC</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => setValor(valor + '7')}>7</button></td>
                    <td><button onClick={() => setValor(valor + '8')}>8</button></td>
                    <td><button onClick={() => setValor(valor + '9')}>9</button></td>
                    <td><button onClick={() => setValor(valor + '/')}>/</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => setValor(valor + '4')}>4</button></td>
                    <td><button onClick={() => setValor(valor + '5')}>5</button></td>
                    <td><button onClick={() => setValor(valor + '6')}>6</button></td>
                    <td><button onClick={() => setValor(valor + '*')}>*</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => setValor(valor + '1')}>1</button></td>
                    <td><button onClick={() => setValor(valor + '2')}>2</button></td>
                    <td><button onClick={() => setValor(valor + '3')}>3</button></td>
                    <td><button onClick={() => setValor(valor + '-')}>-</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => setValor(valor + '0')}>0</button></td>
                    <td><button onClick={() => setValor(valor + '.')}>.</button></td>
                    <td><button onClick={() => setValor(eval(valor))}>=</button></td>
                    <td><button onClick={() => setValor(valor + '+')}>+</button></td>
                </tr>
            </table>
        </>
    )
}

export default Botoes;