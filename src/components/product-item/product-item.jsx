import React from 'react';
import { ProductDetails } from '../product-details/product-details.jsx';
import './product-item.style.scss';

export class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {
                backgroundImage: ''
            },
            detailsVisible: false
        };
    }

    componentDidMount() {
        // console.log(this.state);
        this.setState({
            styles: {
                backgroundImage: 'url(' + this.props.pic + ')'
            }
        });
    }

    showDetails() {
        this.setState({
            detailsVisible: true
        });
    }

    hideDetails() {
        this.setState({
            detailsVisible: false
        });
    }

    render() {
        return (
            <div className="ai-product-item">
                <ProductDetails 
                    picStyles={this.state.styles} 
                    productTitle={this.props.title} 
                    subproducts={this.props.subproducts} 
                    detailsVisible={this.state.detailsVisible}
                    showDetails={() => this.showDetails()}
                    closeDetails={() => this.hideDetails()}/>

                <div style={this.state.styles} className="ai-product-item__pic"></div>
                <div className="ai-product-item__title-container">
                    <a className="ai-product-item__button" onClick={() => this.showDetails()}>
                        <h3 className="ai-product-item__title">{this.props.title}</h3>
                    </a>                    
                </div>
            </div>
        );
    }
} 