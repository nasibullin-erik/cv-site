import React from "react";

class Anchor extends React.Component {
    render() {
        return (
            <div id={this.props.id} style={{paddingTop: '100px',
                                            marginTop: '-100px',
                                            display: 'block',
                                            ...this.props.style}}/>
        )
    }
}

export { Anchor }