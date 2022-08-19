import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
  const estilosBotao = {marginTop: 12, paddingTop: 8,
  paddingBottom:8, backgroundColor:'blueviolet',
  color: 'white', border:'none', width:'100%',
  borderRadius:8}
  const textoDoRotulo ='Nome:'
  const obterTextoDoBotao = () => "Enviar"

  return (
    <div style={{margin: 'auto', width: 768, backgroundcolor: '#EEE',
    padding:12, borderRadius: 8 }}>
      <label class Name="rotulo" htmlFor='nome' style={{display:'block',
      marginBottom:4}}>{textoDoRotulo}</label>
      <input type='text' id='nome' style={{paddingTop:8,
      paddinBottom:8, borderstyle:'hidden', width:'100%',
      borderRadius:8, outline:'none'}} />
      {/*  */}
      <button 
      // sim
      onClick={obterTextoDoBotao}
      //sim
      onClickCapture={() => obterTextoDoBotao()}
      //nâo
      onClick={obterTextoDoBotao()}
      style={estilosBotao}>{obterTextoDoBotao()}</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
)