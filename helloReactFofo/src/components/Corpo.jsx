import './Corpo.css'

function Corpo(){
    function alertarUsuario(){

        alert('Cuidado, Mark está próximo...')
    }

    return(
        <div className="container-corpo">
         <h1>Desbravando o React</h1>

        <p>Mark Zuckerberg, eu terei minha vingança <br />
        Evidências que provam que Mark Zuckerberg é reptiliano</p>
        <button onClick={alertarUsuario}>Alerta</button>
        <img onClick={alertarUsuario} className='imagem'  src="./mark zuckerberg and cesar romero.webp" alt="" />
        
    
        </div>
        
        

    )

}

export default Corpo;