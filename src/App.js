import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';

class App extends Component {

  state={
    noticias:[]
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias=()=>{

    const apiKey='8a608a344eb343c8b515b4190ad9f2c8'

    const url =  `http://newsapi.org/v2/top-headlines?country=cu&apiKey=${apiKey}`;

    // console.log(url);
    fetch(url)
    .then(respuesta=>{
      return respuesta.json();
    })
    .then(datos=>{
      this.setState({
        noticias: datos.articles
      })   
    })
    .catch(error=>console.log(error))
    
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header titulo='Noticias'/>
        <div className="container white contenedor-noticias">
          <Formulario />
          <Noticias 
            noticias={this.state.noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;
