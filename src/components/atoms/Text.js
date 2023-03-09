import React from "react"
import '../../fonts.css'

const Types = {
    REGULAR: 'TTNormsRegular',
    MEDIUM: 'TTNormsMedium',
    BOLD: 'TTNormsBold',
}


class Text extends React.Component {
    render() {
        return (
            <div style={{fontFamily: this.props.type,
                        color: 'white', 
                        cursor: 'default',
                        ...this.props.style}}
                    className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}



export { Types, Text }