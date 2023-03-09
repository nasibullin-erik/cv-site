import React from "react"
import { OpenLink } from "./OpenLink"

class Link extends React.Component {
    render() {
        return (
            <div onClick={() => OpenLink(this.props.to, this.props.newWindow)}
                style={{cursor: 'pointer'}}>
                {this.props.children}
            </div>
               
        )
    }
}

export { Link }