import React from "react";
import { Title } from "../../atoms/Title";
import picture from "../../../assets/imgs/picture.png";
import Block from "../../molecules/Block";
import { Text, Types } from "../../atoms/Text";
import { BlockTitle } from "../../molecules/BlockTitle";
import { DownloadResumeButton } from "../../molecules/DownloadResumeButton";
import { ContactMeButton } from "../../molecules/ContactMeButton";
import { Anchor } from "../../atoms/Anchor";

class AboutBlockTelephone extends React.Component {
    render() {
        return (
            <Block>
                <Anchor id='about'/>
                <BlockTitle>
                    Обо мне😎
                </BlockTitle>
                <img src={picture} alt='Main' style={{
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: '250px', 
                                        maxHeight: '250px',
                                        borderRadius: '100px',
                                        height: 'auto',
                                        width: 'auto',
                                        objectFit: 'cover',
                                        marginBottom: '20px'}}/>     
                <div style={{display: 'flex',
                            justifyContent: 'space-between', 
                            flexDirection: 'column', 
                            alignItems: 'center'}}>
                    <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                margin: '25px 0',
                            }}>
                            <Title style={{marginBottom: '15px'}}>
                                Давай познакомимся👋
                            </Title>
                            <Text type={Types.REGULAR}>
                                Рад новому знакомству! Меня зовут Эрик. Мне 21 год, DevOps инженер из Казани. Люблю автоматизацию и оптимизацию. Знаю системы оркестраций - Kubernetes, Nomad. Пишу собственные пайплайны на GitLab CI/CD и GitHub Actions. Активно пользуюсь контейнеризацией и виртуализацией
                            </Text>
                    </div>


                    <div style={{display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            margin: '20px 0',
                    }}>
                        <Title style={{marginBottom: '15px'}}>
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

export { AboutBlockTelephone };