import React, { Component } from 'react'
import Noticia from './Noticia'
import PropTypes from 'prop-types'
import { TransitionGroup,CSSTransition } from 'react-transition-group'

export class Noticias extends Component {
    render() {
        return (
            <div className="row">
                <TransitionGroup>
                    {Object.keys(this.props.noticias).map(noticia=>(
                            // this.props.noticias.map(noticia=>(
                        <CSSTransition
                            key={noticia}
                            classNames="fade"
                            timeout={500}
                        >
                            <Noticia                                 
                                noticia={this.props.noticias[noticia]}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>   
            </div>
        )
    }
}

Noticias.propTypes={
    noticias:PropTypes.array.isRequired
}
export default Noticias
