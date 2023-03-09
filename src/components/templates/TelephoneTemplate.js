import React from 'react';
import { GreetingsBlock } from '../organisms/PC/GreetingsBlock';
import { AboutBlockTelephone } from '../organisms/Mobile/AboutBlockTelephone';
import { SkillsBlockTelephone } from '../organisms/Mobile/SkillsBlockTelephone';
import { ExperienceBlockTelephone } from '../organisms/Mobile/ExperienceBlockTelephone';
import { LinksBlockTelephone } from '../organisms/Mobile/LinksBlockTelephone';
import { HeaderTelephone } from '../organisms/Mobile/HeaderTelephone';

class TelephoneTemplate extends React.Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                {/* <Glow style={{left: '-40%', height: '4250px'}}/> */}
                {/* <Glow style={{left: '115%', height: '4250px'}}/> */}

                <HeaderTelephone/>

                <div style={{
                        marginLeft: '5%',
                        marginRight: '5%',
                        }}>
                    <GreetingsBlock/>
                    <AboutBlockTelephone/>
                    <ExperienceBlockTelephone/>
                    <SkillsBlockTelephone/>
                    <LinksBlockTelephone/>
                </div>
            </div>
        )
    }
}

export { TelephoneTemplate }
