/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Header(props) {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a className="brand-logo center" >{props.titulo}</a>
            </div>
        </nav>
    )
}

export default Header