import React from "react";
import CurvedArrow from "react-curved-arrow";

class Arrow extends React.Component {
    render() {
        return (
                <CurvedArrow
                    toSelector={'#arrowStart'}
                    fromSelector={'#arrowEnd'}
                    color={'#3B6EF6'}
                    dynamicUpdate={true}
                    zIndex={-1}
                />
        )
    }
}

export { Arrow };