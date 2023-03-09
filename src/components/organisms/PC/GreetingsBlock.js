import React from "react";
import { Text, Types } from "../../atoms/Text";

class GreetingsBlock extends React.Component {
    render() {
        return (
           <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                margin: '20px 0',
           }}>
                <Text type={Types.BOLD}
                        style={{color: '#3B6EF6', fontSize: '35px'}}>
                    Привет, я Эрик!🙃

                </Text>
                <Text type={Types.REGULAR} style={{fontSize: '20px', padding: '16px 0',}}>
                    DevOps Инженер
                </Text>
                <hr style={{backgroundColor: '#0B266D',
                            height: '1px',
                            border: 'none',
                            width: '100%'}}/>
           </div>
        )
    }
}

export { GreetingsBlock };