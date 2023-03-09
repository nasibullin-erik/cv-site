import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Block from "../../molecules/Block";
import { BlockTitle } from "../../molecules/BlockTitle";
import { faTelegramPlane, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Text, Types } from "../../atoms/Text";
import { DownloadResume } from "../../atoms/DownloadResume";
import { LinkRow } from "../../molecules/LinkRow";
import { Anchor } from "../../atoms/Anchor";

class LinksBlock extends React.Component {
    render() {
        return (
            <Block style={{display: 'block'}}>
                <Anchor id='links'/>
                <BlockTitle>
                    Ссылки🔗
                </BlockTitle>
                <div style={{display: 'flex', 
                            width: '100%',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            fontSize: '18px',
                            }}>
                    <div style={{width: '35%',
                                }}>
                        <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <div onClick={DownloadResume} style={{cursor: 'pointer'}} className='links'>
                                <Text type={Types.REGULAR} style={{cursor: 'pointer'}}>
                                    <FontAwesomeIcon icon={faFile} style={{color: '#3B6EF6'}}/> &#8203; Резюме
                                </Text>
                            </div>
                            <LinkRow linkTo='https://github.com/nasibullin-erik'>
                                <FontAwesomeIcon icon={faGithub} style={{color: '#3B6EF6'}}/> Основной репозиторий
                            </LinkRow>
                            <LinkRow linkTo='https://github.com/Samurai9'>
                                <FontAwesomeIcon icon={faGithub} style={{color: '#3B6EF6'}}/> Студеческий репозиторий
                            </LinkRow>
                        </div>
                    </div>
                    <div style={{width: '35%',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'}}>
                        <LinkRow linkTo='https://t.me/Erik_Nasibullin'>
                            <FontAwesomeIcon icon={faTelegramPlane} style={{color: '#3B6EF6'}}/> Telegram
                        </LinkRow>
                        <LinkRow linkTo='mailto: nasibullinei@internet.ru'>
                            <FontAwesomeIcon icon={faEnvelope} style={{color: '#3B6EF6'}}/> nasibullinei@internet.ru
                        </LinkRow>
                        <LinkRow linkTo='https://2gis.ru/kazan'>
                            <FontAwesomeIcon icon={faLocationDot} style={{color: '#3B6EF6'}}/> &#8203; Казань, Россия
                        </LinkRow>
                    </div>
                </div>                      
            </Block>
        )
    }
}


export { LinksBlock };