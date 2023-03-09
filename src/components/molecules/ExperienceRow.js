import React from "react"
import { Types, Text } from "../atoms/Text"
import { Point } from "../atoms/Point"

class ExperienceRow extends React.Component {
    render() {
        const Date = (text) => {
            return (
                <Text type={Types.REGULAR} style={{textAlign: this.props.textOnRightSide ? 'left' : 'right', 
                                color: '#E5D7E4',
                                width: '36%',
                                padding: '25px'}}>
                        {text}
                </Text>
            )
        } 

        const Block = (title, text) => {
            return (
                <div style={{display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            borderRadius: '30px', 
                            border: '1px solid #3B6EF6',
                            backgroundColor: 'rgba(59, 110, 246, 0.1)',  
                            width: '36%',
                            padding: '25px'}}>
                    <Text type={Types.MEDIUM} style={{marginBottom: '20px', fontSize: '19px'}}>
                        <b>{title}</b>
                    </Text>
                    <Text type={Types.REGULAR} style={{textAlign: 'center'}}>
                        {text}
                    </Text>
                </div>
            )
        }
        const getPositionedBlock = () => {
            if (this.props.textOnRightSide) {
                return (
                    <>
                        {Block(this.props.titleText, this.props.blockText)}
                        <Point emoji={this.props.emoji}/>
                        {Date(this.props.dateText)}
                    </>
                )
            } else {
                return (
                    <>
                        {Date(this.props.dateText)}
                        <Point emoji={this.props.emoji}/>
                        {Block(this.props.titleText, this.props.blockText)}
                    </>
                )
            }
        }
        return (
            <div style={{display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        padding: '50px 0px'}}>
                <div style={{display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            width: '100%',
                            padding: '25px 0px'}}>
                    {getPositionedBlock()}
                </div>
            </div>
        )
    }
}

export { ExperienceRow };