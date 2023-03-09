import React  from "react"
import { Button } from "../atoms/Button"
import { OpenLink } from "../atoms/OpenLink"
import { Text, Types } from "../atoms/Text"

class ContactMeButton extends React.Component {
    render() {
        return (
            <Button style={{border: '2px solid #3B6EF6', 
                            backgroundColor: '#323449',}} 
                    onClick={() => {OpenLink('https://t.me/Erik_Nasibullin')}}>
                <Text type={Types.MEDIUM} style={{cursor: 'pointer'}}>
                    Связаться со мной
                </Text>
            </Button>
        )
    }
}

export { ContactMeButton }