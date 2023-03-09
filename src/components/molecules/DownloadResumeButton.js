import React from "react"
import { Button } from "../atoms/Button"
import { DownloadResume } from "../atoms/DownloadResume"
import { Text, Types } from "../atoms/Text"

class DownloadResumeButton extends React.Component {
    render() {
        return (
            <Button style={{backgroundColor: '#3B6EF6'}} onClick={DownloadResume} className='links'>
                <Text type={Types.MEDIUM} style={{cursor: 'pointer'}}>
                    Скачать резюме
                </Text>
            </Button>
        )
    }
}

export { DownloadResumeButton }