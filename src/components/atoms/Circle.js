import React from "react";

class Circle extends React.Component {
    render() {
        return (
            <div style={{width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        ...this.props.style}}>
                {this.props.children}
            </div>
        )
    }
}

export { Circle };