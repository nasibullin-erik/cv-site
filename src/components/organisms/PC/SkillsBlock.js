import React from "react";
import { Anchor } from "../../atoms/Anchor";
import { Text, Types } from "../../atoms/Text";
import Block from "../../molecules/Block";
import { BlockTitle } from "../../molecules/BlockTitle";

class SkillsBlock extends React.Component {
    render() {
        return (
            <Block style={{display: 'block'}}>
                <Anchor id='skills'/>
                <BlockTitle>
                    Скиллы🤔
                </BlockTitle>
                <div style={{display: 'flex', 
                            width: '100%',
                            justifyContent: 'space-around'}}>
                    <div style={{width: '35%'}}>
                        <Text type={Types.MEDIUM} style={{fontSize: '21px', color: '#3B6EF6'}}>
                            Hard Skills:
                        </Text>
                        <div>
                            <Text type={Types.REGULAR}>
                                <ul>
                                    <li>
                                        <b>Оркестрация</b> - Kubernetes (self-hosted), Nomad
                                    </li>
                                    <li>
                                        <b>Контроль версий</b> - GitLab, GitHub
                                    </li>
                                    <li>
                                        <b>Системное администрирование</b> - Linux (CentOS 6, CentOS 7)
                                    </li>
                                    <li>
                                        <b>Балансировщики</b> - Nginx, Traefik, HAProxy
                                    </li>
                                    <li>
                                        <b>ЯП</b> - Java, Python, JavaScript, Bash
                                    </li>
                                    <li>
                                        <b>Логирование</b> - ELK stack, Graylog, Fluentd
                                    </li>
                                    <li>
                                        <b>Метрики</b> - Prometheus, VictoriaMetrics, Grafana, Node Exporter, cAdvisor
                                    </li>
                                </ul>
                            </Text>
                        </div>
                    </div>
                    <div style={{width: '35%'}}>
                        <Text type={Types.MEDIUM} style={{fontSize: '21px', color: '#3B6EF6'}}>
                            Soft Skills:
                        </Text>
                        <div>
                            <Text type={Types.REGULAR}>
                                <ul>
                                    <li>
                                        <b>Люблю учиться и узнавать новое</b> - никогда не стою на месте и постоянно развиваюсь 
                                    </li>
                                    <li>
                                        <b>Необвинительная культура</b> - никогда не буду обвинять кого-либо, ведь всем присущи ошибки
                                    </li>
                                    <li>
                                        <b>Самостоятельность</b> - никогда сразу не бегу за помощью, всегда пытаюсь сделать самостоятельно
                                    </li>
                                    <li>
                                        <b>Работа в команде</b> - умею разбивать задачи и разделять их в зависимости от человека
                                    </li>
                                </ul>
                            </Text>
                        </div>
                    </div>
                </div>
            </Block>
        )
    }
}

export {SkillsBlock};