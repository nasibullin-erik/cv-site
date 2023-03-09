import React from "react"
import { Circle } from "../atoms/Circle"

class TrafficLight extends React.Component {
    render() {
        return (
            <>
                <Circle style={{backgroundColor: 'red'}}/>
                <Circle style={{backgroundColor: 'yellow'}}/>
                <Circle style={{backgroundColor: 'green'}}/>
            </>
        )
    }
}

export { TrafficLight };