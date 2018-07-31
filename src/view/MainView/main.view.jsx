import React from 'react';
import './main-view.style.scss';
import { MainSlider } from '../../components/slider';
import { ProductList } from '../../components';
// import { Geo } from '../../components/geo';

export class MainView extends React.Component {

    render() {
        return (
            <div className="main-view">
                <header className="ai-header">
                    <div className="ai-header-logo"></div>
                    <h2 className="ai-header-pnumber">+375 29 123 45 67</h2>
                </header>
                <div className="ai-header__slogan">
                    <h1>Ремонт автомобилей и микроавтобусов</h1>
                </div>
                <div className="ai-main-frame">
                    <MainSlider />
                </div>
                <div className="ai-header__slogan ai-slogan__section">
                    <h1 className="ai-slogan__title">наши приемущества</h1>
                </div>
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
                <div className="ai-about">
                    <div className="ai-about-item">
                        <h1>О нас</h1>
                        <p className="ai-about-text">
                         ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                         sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                         consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                         qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  
                         tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, q
                         uis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                         Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                         vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                        </p>
                    </div>
                    <div className="ai-about-item">
                        <h1>Контакты</h1>
                        <p className="ai-about-text__primary">
                            Могилёв, Первомайская 123
                        </p>
                        <p className="ai-about-text__primary">
                            Телефон 132 46 79
                        </p>
                        <div className="ai-about-text__primary">
                            Мы в социальных сетях
                            <p className="ai-sn">
                                <i className="fab fa-instagram ai-sn-icon fa-3x"></i>
                                <i className="fab fa-odnoklassniki ai-sn-icon fa-3x"></i>
                                <i className="fab fa-twitter ai-sn-icon fa-3x"></i>
                                <i className="fab fa-vk ai-sn-icon fa-3x"></i>
                                <i className="fab fa-facebook-square ai-sn-icon fa-3x"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ai-products" id="products">
                    <ProductList/>
                </div>
            </div>
        );
    }
}