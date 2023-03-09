import React from "react";
import { TrafficLight } from "./TrafficLight";
import { Title } from "../atoms/Title";

class BlockTitle extends React.Component {
    render() {
        return (
            <div style={{}}>
                <div style={{display: 'flex',
                            justifyContent: 'space-between',
                            width: '60px',
                            paddingBottom: '10px'}}>
                    <TrafficLight/>
                </div>
                <Title style={{textAlign: 'center', width: '100%', marginBottom: '25px'}}>
                    {this.props.children}
                </Title>
            </div>
        )
    }
}

export { BlockTitle };