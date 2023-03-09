import React from "react";
import Block from "../../molecules/Block";
import { BlockTitle } from "../../molecules/BlockTitle";
import { Anchor } from "../../atoms/Anchor";
import { ExperienceRowMobile } from "../../molecules/ExperienceRowMobile";

class ExperienceBlockTelephone extends React.Component {
    render() {
        return (
            <Block style={{}}>
                <Anchor id='experience'/>
                <BlockTitle>
                    <div>
                        Опыт👨‍🎓
                    </div>
                </BlockTitle>
                <ExperienceRowMobile dateText='Сентябрь 2022 - по сегодняшний день'
                                titleText='ООО "Системы документооборота"'
                                blockText='DevOps Инженер. Занимаюсь администрированием Linux, кластеров Kubernetes и Nomad, сопровождением высоконагруженных сервисов, настройкой CI\CD и инфрастркутуры, контейнеризацией приложений'
                                />
                <ExperienceRowMobile dateText='Сентябрь 2019 - Июль 2023'
                                titleText='Казанский Федеральный Университет'
                                blockText='Институт Информационных технологий и Интеллектуальных Систем. Специальность программная инженерия. Активно изучал Java, проходил курсы по подготовке DevOps и SRE инженеров'
                                />
                <ExperienceRowMobile dateText='2007 - 2019'
                                titleText='МОАУ СОШ №12 города Нефтекамск'
                                blockText='Всегда увлекался информатикой, ходил на всевозможнные олимпиады и нередко выигрывал'
                                /> 
                {/* <div style={{display: 'flex',
                            flexDirection: 'column',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignItems: 'center',
                            textAlign: 'center', 
                            }} >
                    <div style={{color: '#E5D7E4', marginBottom: '5px'}}>
                        Сентябрь 2022 - по сегодняшний день
                    </div>
                    <div style={{ 
                                borderRadius: '20px', 
                                border: '1px solid #3B6EF6',
                                padding: '10px',
                                backgroundColor: 'rgba(59, 110, 246, 0.1)',  
                                }}>
                        <Text type={Types.MEDIUM} style={{marginBottom: '20px', fontSize: '19px'}}>
                            <b>ООО "Системы Документооборота"</b>
                        </Text>
                        <Text>
                        </Text>
                        <Text type={Types.REGULAR} style={{textAlign: 'center'}}>
                            DevOps Инженер. Занимаюсь администрированием Linux, кластеров Kubernetes и Nomad, сопровождением высоконагруженных сервисов, настройкой CI\CD и инфрастркутуры, контейнеризацией приложений
                        </Text>
                        <div>
                        </div>
                    </div>
                </div> */}
                {/* <ExperienceRow dateText='Сентябрь 2022 - по сегодняшний день'
                                titleText='ООО "Системы документооборота"'
                                blockText='DevOps Инженер. Занимаюсь администрированием Linux, кластеров Kubernetes и Nomad, сопровождением высоконагруженных сервисов, настройкой CI\CD и инфрастркутуры, контейнеризацией приложений'
                                emoji='👨‍💻'/>
                <ExperienceRow dateText='Сентябрь 2019 - Июль 2023'
                                titleText='Казанский Федеральный Университет'
                                blockText='Институт Информационных технологий и Интеллектуальных Систем. Специальность программная инженерия. Активно изучал Java, проходил курсы по подготовке DevOps и SRE инженеров'
                                emoji='🤓'
                                textOnRightSide/>
                <ExperienceRow dateText='2007 - 2019'
                                titleText='МОАУ СОШ №12 города Нефтекамск'
                                blockText='Всегда увлекался информатикой, ходил на всевозможнные олимпиады и нередко выигрывал'
                                emoji='🏫'/> */}


            </Block>
        )
    }
}

export { ExperienceBlockTelephone };