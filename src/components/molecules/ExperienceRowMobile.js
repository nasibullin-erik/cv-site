import React from "react"
import { Types, Text } from "../atoms/Text"

class ExperienceRowMobile extends React.Component {
    render() {
        return (
            <div style={{display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignItems: 'center',
                        textAlign: 'center', 
                        margin: '30px 0px',
                        }} >
                <div style={{color: '#E5D7E4', marginBottom: '5px'}}>
                    {this.props.dateText}
                </div>
                <div style={{ 
                            borderRadius: '20px', 
                            border: '1px solid #3B6EF6',
                            padding: '10px',
                            backgroundColor: 'rgba(59, 110, 246, 0.1)',  
                            }}>
                    <Text type={Types.MEDIUM} style={{marginBottom: '5px', fontSize: '17px'}}>
                        <b>{this.props.titleText}</b>
                    </Text>
                    <Text type={Types.REGULAR} style={{textAlign: 'center'}}>
                        {this.props.blockText}
                    </Text>
                </div>
            </div>
        )
    }
}

export { ExperienceRowMobile };