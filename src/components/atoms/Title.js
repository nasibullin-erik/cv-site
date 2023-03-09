import React from "react";
import { Text, Types } from "./Text";

class Title extends React.Component {
    render() {
        return (
            <Text type={Types.BOLD} 
                    style={{color: 'white',
                            fontSize: '24px',
                            ...this.props.style}}>
                {this.props.children}
            </Text>
        )
    }
}

export { Title };