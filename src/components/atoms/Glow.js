import React from "react";

class Glow extends React.Component {
    render() {
        return (
            <div style={{
                margin: '0px',
                position: 'absolute',
                height: '2500px',
                boxSizing: 'border-box',
                minWidth: '25%',
                borderRadius: '50%',
                boxShadow: '0px 0px 75px 100px rgba(59, 110, 246, 0.4)',
                backgroundColor: '#3B6EF6',
                overflow: 'hidden',
                ...this.props.style,
            }}/>
        )
    }
}

export { Glow };