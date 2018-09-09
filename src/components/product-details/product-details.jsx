import React from 'react';
import './product-details.style.scss';

export class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    onDetailsClose() {
        if (this.props.closeDetails) {
            this.props.closeDetails();
        }
    }

    render() {
        return (
            <div className={this.props.detailsVisible ? 'ai-product-details' : 'ai-product-details ai-product-details--hidden'}>
                <div className="ai-product-details__container">                    
                    <div className="ai-product-details__section">
                        <div className="ai-product-details__section-item">
                            <div style={this.props.picStyles} className="ai-product-details__pic"></div>
                        </div>
                        <div className="ai-product-details__section-item">
                            <h3>{this.props.productTitle}</h3>
                            <ul className="ai-product-details__options">
                                {
                                    this.props.subproducts ?
                                        this.props.subproducts.map((item, index) => {
                                            return (
                                                <li className="ai-product-details__option" key={index}>{item.name}</li>
                                            );
                                        }) : ''
                                }
                            </ul>
                            <a onClick={() => this.onDetailsClose()} className="ai-product-details__closeBtn">
                                <i className="fas fa-times ai-product-details__btn-icon fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}