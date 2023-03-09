import React from "react";

class Block extends React.Component {
    render() {
        return (
            <div style={{border: 'none',
                        backgroundColor: 'rgba(255,255,255, 0.1)',
                        color: 'white',
                        borderRadius: '20px',
                        padding: '20px 20px',
                        display: 'block',
                        marginBottom: '30px',
                        ...this.props.style
                        }}
                    id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

export default Block;