import React from "react";
import { Link } from "../../atoms/Link";

class HeaderTelephone extends React.Component {
    render() {
        return (
            <div style={{ 
                color: 'white',
                backgroundColor: '#323449',
                fontSize: '1.1em',
                height: '50px',
                position: 'sticky',
                top: 0,
                }}>
                <div style={{marginLeft: '5%',
                            marginRight: '5%',
                            paddingTop: '15px',
                            fontFamily: 'TTNormsMedium',
                            }}>
                    <div style={{display: 'flex',
                                justifyContent: 'space-around',
                                }}>
                        <div>
                            <Link to='#about' newWindow={false}>
                                Обо мне
                            </Link>
                        </div>
                        <div>
                            <Link to='#experience' newWindow={false}>
                                Опыт
                            </Link>
                        </div>  
                        <div>
                            <Link to='#skills' newWindow={false}>
                                Скиллы
                            </Link>
                        </div>    
                        {/* <div> */}
                            {/* Проекты */}
                        {/* </div>      */}
                        <div>
                            <Link to='#links' newWindow={false}>
                                Ссылки
                            </Link>
                        </div>           
                    </div>
                </div>
            </div>
        )
    }
}

export { HeaderTelephone };