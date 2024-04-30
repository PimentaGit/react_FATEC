
import Letreiro from"/letreiro";



        function letreiroFrase(frase) {
            const element = (
                <h1>{frase}</h1>
            )
            ReactDOM.render(element, document.getElementById('root'))

        }

        let frase = "Venha estudar na FATEC!"
        let cont = 0


        let intervalo = setInterval(() => {

            let temp = ""

            for (let i = 0; i < cont; i++) {
                temp += frase[i]
            }
            letreiroFrase(temp)
            cont++

            if (cont > frase.length) {
                clearInterval(intervalo)
            }
        }, 500)



export default Letreiro;

