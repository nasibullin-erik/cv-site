import React from "react";
import { Link } from "../atoms/Link";
import { Text, Types } from "../atoms/Text";

class LinkRow extends React.Component {
    render() {
        return (
            <div style={{padding: '5px 0'}}>
            <Text type={Types.REGULAR} className='links'>
                <Link to={this.props.linkTo}>
                        {this.props.children}
                </Link>
            </Text>
            </div>
        )
    }
}

export { LinkRow }