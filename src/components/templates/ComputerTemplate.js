import React from 'react';
import { GreetingsBlock } from '../organisms/PC/GreetingsBlock';
import { Header } from '../organisms/PC/Header.js';
import { AboutBlock } from '../organisms/PC/AboutBlock';
import { ExperienceBlock } from '../organisms/PC/ExperienceBlock';
import { SkillsBlock } from '../organisms/PC/SkillsBlock';
import { LinksBlock } from '../organisms/PC/LinksBlock';
import { Glow } from '../atoms/Glow';

class LargeTemplate extends React.Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <Glow style={{left: '-25%'}}/>
                <Glow style={{left: '100%'}}/>

                <Header/>

                <div style={{
                        marginLeft: '15%',
                        marginRight: '15%',}}>
                    <GreetingsBlock/>
                    <AboutBlock/>
                    <ExperienceBlock/>
                    <SkillsBlock/>
                    <LinksBlock/>
                </div>
            </div>
        )
    }
}

export { LargeTemplate }
