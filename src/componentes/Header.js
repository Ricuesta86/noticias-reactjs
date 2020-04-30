/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'


function Header(props) {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a className="brand-logo center" >{props.titulo}</a>
            </div>
        </nav>
    )
}

Header.propTypes={
    titulo: PropTypes.string.isRequired
}

export default Header