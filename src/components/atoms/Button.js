import React from "react";

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}
                    className='links'
                    style={{width: '100%', 
                            border: 'none',
                            fontSize: '1em',
                            color: 'white',
                            padding: '5px',
                            borderRadius: '11px',
                            margin: '10px',
                            fontFamily: 'TTNormsMedium',
                            cursor: 'pointer',
                            ...this.props.style,
                            }}>
                {this.props.children}
            </button>
        )
    }
}

export { Button };