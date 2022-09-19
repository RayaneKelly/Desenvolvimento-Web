import { useState } from "react"

const VotaCidades = () => {

    const [qxd, setQxd] = useState(0)
    const [Limo, setLimo] = useState(0)
    const [crateus, setCrateus] = useState(0)
    const [votacao, setVotacao] = useState(false)

    const votosQxd = () => {
        setQxd(qxd + 1)
    }

    const votosLimo = () => {
        setLimo(Limo + 1)
    }

    const votosCrateus = () => {
        setCrateus(crateus + 1)
    }

    const finalizarVotacao = () => {
        setVotacao(!votacao)

    }

    const apuracao = () =>{
        if (votacao){
            if ( qxd > Limo && qxd > crateus){
                return ( <p> Quixadá Venceu</p>)
            }
            else if ( Limo > qxd && Limo > crateus){
                return ( <p> Limoeiro do Norte Venceu</p>)
            }
            else if ( crateus > qxd && crateus > Limo){
                return ( <p> Crateus Venceu</p>)
            }
            else if (qxd===Limo && qxd===crateus){
                return (<p> Todos empataram</p>)
            }
            else if (qxd===Limo){
                return ( <p> Quixadá e Limoeiro do Norte Empataram</p>)
            }
            else if (qxd===crateus){
                return ( <p> Quixadá e Crateus Empataram</p>)
            }
            else if (crateus===Limo){
                return ( <p>  Limoeiro do Norte e Crateus Empataram</p>)
            } 

        }
       
        return null

    }

    return (
        <div>
            <div>
                <h2>Quixadá: {qxd} </h2>
                <h2>Limoeiro do Norte: {Limo} </h2>
                <h2>Crateús: {crateus} </h2>
            </div>
            <div>
                <button onClick={votosQxd}>Votar Quixadá </button>
                <button onClick={votosLimo}>Votar Limoeiro do Norte</button>
                <button onClick={votosCrateus}>Votar Crateús </button>
            </div>
            <div>
                <button onClick={finalizarVotacao}> Finalizar votação </button>
                {
                    apuracao()
                }
            </div>
        </div>

    )

}

export default VotaCidades