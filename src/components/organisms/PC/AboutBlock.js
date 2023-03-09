import React from "react";
import { Title } from "../../atoms/Title";
import picture from "../../../assets/imgs/picture.png";
import Block from "../../molecules/Block";
import { Text, Types } from "../../atoms/Text";
import { BlockTitle } from "../../molecules/BlockTitle";
import { DownloadResumeButton } from "../../molecules/DownloadResumeButton";
import { ContactMeButton } from "../../molecules/ContactMeButton";
import { Anchor } from "../../atoms/Anchor";

class AboutBlock extends React.Component {
    render() {
        return (
            <Block>
                <Anchor id='about'/>
                <BlockTitle>
                    Обо мне😎
                </BlockTitle>
                
                <div style={{display: 'flex',
                            justifyContent: 'space-between'}}>
                    <div style={{maxWidth: '30%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Title style={{marginBottom: '25px'}}>
                                Давай познакомимся👋
                            </Title>
                            <Text type={Types.REGULAR}>
                                Рад новому знакомству! Меня зовут Эрик. Мне 21 год, DevOps инженер из Казани. Люблю автоматизацию и оптимизацию. Знаю системы оркестраций - Kubernetes, Nomad. Пишу собственные пайплайны на GitLab CI/CD и GitHub Actions. Активно пользуюсь контейнеризацией и виртуализацией
                            </Text>
                    </div>

                    <img src={picture} alt='Main' style={{maxWidth: '240px', 
                                        maxHeight: '240px', 
                                        borderRadius: '100px',
                                        height: 'auto',
                                        width: 'auto',
                                        alignSelf: 'center',
                                        objectFit: 'cover'}}/>
                    <div style={{width: '30%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                    }}>
                        <Title style={{marginBottom: '25px'}}>
                            Интересно?🧐
                        </Title>
                        <Text type={Types.REGULAR}>
                            Если же я Вам понравился настолько же насколько и Вы мне, (потому что Вы выглядите сегодня великолебно!), а может быть есть вопросы или предложения, то всегда можно:
                        </Text>
                        <DownloadResumeButton/>
                        <ContactMeButton/>

                    </div>
                </div>
            </Block>
        )
    }
}

export { AboutBlock };