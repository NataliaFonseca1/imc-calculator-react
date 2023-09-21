import {  useState} from "react";
import styles from './Formulario.module.css'



const Formulario=() =>{
  const [peso, setPeso]=useState('');
  const [altura, setAltura]=useState('');
  const [resultado, setResultado]=useState(0);



  const renderizaResultado= ()=>{
    const alturaMetros=altura/100;
    const resultado= peso/(alturaMetros*alturaMetros)
      setResultado(resultado.toFixed(2));
      
  }
  const resetar=()=>{
    setPeso('');
    setAltura('');
    setResultado(0)
  };

  
      const imc = ()=>{
        if (resultado <18.5){
          return <p>você está abaixo do peso</p>;
        }
        else if (resultado >18.6 && resultado < 24.9){
          return <p>Você está com o peso normal</p>
        } else if (resultado >25 && resultado <29.9){
          return <p>Você está com sobrepeso</p>
        }else if (resultado >30 && resultado <34.9){
          return <p>Você está com Obesidade grau I</p>
        }else if (resultado >35 && resultado <39.9){
          return <p>Você está com Obesidade grau II</p>
        } else{
          return <p>Você está com obesidade mórbida grau III</p>
      }
      
   
  }

return(
  <div className="container">
    
  <form className={styles.formContainer} >
  <h1>Calculadora de IMC</h1>
  <input type="number" placeholder="Digite o seu peso em kg" value={peso} onChange={evento=>setPeso(parseFloat(evento.target.value))} />
  <input type="number" placeholder="Digite a sua altura em cm" value={altura} onChange={evento=>setAltura(parseFloat(evento.target.value))} />    
  <button type="button" onClick={renderizaResultado}>Calcular</button>
  <button type="button" onClick={resetar}>Resetar</button>
  <div className={styles.results}>
  <div>
    {resultado > 0 &&(
      <p>Seu IMC é: {resultado}</p>
    )}
    
    </div>
    <div>
    {resultado > 0 &&(
      <p>{imc()}</p>
    )}
    </div>
   
  </div>
 
</form>



  </div>

)

      }

export default Formulario;