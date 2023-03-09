import React from "react";

class Point extends React.Component {
    render() {
        return (
            <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        backgroundColor: '#3B6EF6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        ...this.props.style}}>
                {this.props.emoji}
            </div>
        )
    }
}

export { Point };