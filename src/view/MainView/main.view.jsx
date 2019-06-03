import React from 'react';
import './main-view.style.scss';
import { MainSlider } from '../../components/slider';
import { ProductList } from '../../components';

export class MainView extends React.Component {

    render() {
        return (
            <div className="main-view">
                <header className="ai-header">
                    <div className="ai-header-logo"></div>
                    <div className="ai-header-contacts-container">
                        <h2 className="ai-header-pnumber">+375 29 749 01 17 <img className="ai-header-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/MTS_logo_2015.svg/512px-MTS_logo_2015.svg.png"/></h2>
                        <div className="ai-header-working-hours-container">
                            <h4 className="ai-header-working-title">Режим работы:</h4>
                            <div>
                                <h4 className="ai-header-working-hours">9:00 - 18:00 ПН-ПТ</h4>
                                <h4 className="ai-header-working-hours">9:00 - 14:00 CБ-ВС</h4>
                            </div>
                        </div>
                    </div>
                    
                </header>
                <div className="ai-header__slogan">
                    <h1>Ремонт автомобилей и микроавтобусов</h1>
                </div>
                <div className="ai-main-frame">
                    <MainSlider />
                </div>
                <h1 className="ai-products__title">НАШИ ПРЕИМУЩЕСТВА</h1>
                <div className="ai-advantages">
                    <div className="ai-advantages-item">
                        <i className="fas fa-shuttle-van ai-icon fa-5x"></i>
                        <h3>Ремонт всех марок</h3>
                    </div>
                    <div className="ai-advantages-item">
                        <i className="fas fa-briefcase ai-icon fa-5x"></i>
                        <h3>Индивидуальный подход</h3>
                    </div>
                    <div className="ai-advantages-item">
                        <i className="fas fa-handshake ai-icon fa-5x"></i>
                        <h3>Гарантия качества</h3>
                    </div>
                    <div className="ai-advantages-item">
                        <i className="fas fa-cart-arrow-down ai-icon fa-5x"></i>
                        <h3>Низкие цены</h3>
                    </div>
                </div>
                
                <h1 className="ai-products__title">НАШИ УСЛУГИ</h1>
                <div className="ai-products" id="products">
                    <ProductList />
                </div>
                <h1 className="ai-products__title">КОНТАКТЫ</h1>
                <div className="ai-about">
                    
                    <div className="ai-about-item__map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.4872607411776!2d30.359940815857616!3d53.85198298008814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d053b3900802cd%3A0x1c1fe9615c6e88e9!2z0KHQotCeINCn0J8gItCY0JLQndCYIg!5e0!3m2!1sru!2sby!4v1534445248529" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            allowFullScreen></iframe>
                    </div>
                    <div className="ai-about-item">
                        <h1>Контакты</h1>
                        <p className="ai-about-text__primary">
                            Могилёв, Гомельское шоссе, 64 
                        </p>
                        <p className="ai-about-text__primary">
                            Телефон +375 29 749 01 17 (МТС)
                        </p>
                        <div className="ai-about-text__primary">
                            Группа в 
                            <a className="ai-sn" href="">
                                <i className="fab fa-vk ai-sn-icon fa-1x ai-sn__icon"></i>
                            </a>
                        </div>
                        <div className="ai-about-working-hours-container ai-about-text__primary">
                            <h4 className="ai-about-working-title">Режим работы:</h4>
                            <div>
                                <h4 className="ai-about-working-hours">9:00 - 18:00 ПН-ПТ</h4>
                                <h4 className="ai-about-working-hours">9:00 - 14:00 CБ-ВС</h4>
                            </div>
                        </div>
                        <p className="ai-about-text__primary">
                            УНП 790430743, ЧП "ИВНИ"
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}