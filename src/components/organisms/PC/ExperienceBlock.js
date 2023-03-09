import React from "react";
import Block from "../../molecules/Block";
import { Arrow } from "../../atoms/Arrow";
import { BlockTitle } from "../../molecules/BlockTitle";
import { ExperienceRow } from "../../molecules/ExperienceRow";
import { Anchor } from "../../atoms/Anchor";

class ExperienceBlock extends React.Component {
    render() {
        return (
            <Block>
                <Anchor id='experience'/>
                <BlockTitle>
                    <div>
                        Опыт👨‍🎓
                    </div>
                </BlockTitle>
                <div>
                    <div id="arrowStart"></div>
                </div>
                
                <ExperienceRow dateText='Сентябрь 2022 - по сегодняшний день'
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
                                emoji='🏫'/>

                <Arrow/>
                <div id="arrowEnd"/>
            </Block>
        )
    }
}

export { ExperienceBlock };