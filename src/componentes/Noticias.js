import React, { Component } from 'react'
import Noticia from './Noticia'

export class Noticias extends Component {
    render() {
        return (
            <div className="row">
                {Object.keys(this.props.noticias).map(noticia=>(
                // this.props.noticias.map(noticia=>(
                    <Noticia 
                        key={noticia}
                        noticia={this.props.noticias[noticia]}
                    />
                ))}
            </div>
        )
    }
}

export default Noticias
