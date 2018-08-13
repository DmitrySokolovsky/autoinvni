import React from 'react';
import * as firebase from 'firebase';
import { ProductItem } from '../product-item/product-item.jsx';
import './product-list.style.scss';

export class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    generatePicUrl(arr) {
        var storageRef = firebase.storage().ref();
        var preparedData = [];
        arr.forEach((item) => {
            var fileRef = storageRef.child('prodpics/' + item.pic);
            fileRef.getDownloadURL().then(function(url) {
                item.pic = url;
                preparedData.push(item);
            }).then(() => this.setState({
                data: preparedData
            }));
        });
    }

    componentDidMount() {        
        let database = firebase.database();
        let dataRef = database.ref().child('products');
        dataRef.on('value', snapshot => {
            this.generatePicUrl(snapshot.val());
        }, error => {
            console.log(error);
        });
        
    }


    render() {
        return (
            <div className="ai-product-list">
                {
                    this.state.data.map((item, index) => {
                        return (
                            <ProductItem 
                                pic={item.pic} 
                                title={item.title} 
                                subproducts={item.subproducts} 
                                key={index}/>                            
                        );
                    })
                }
            </div>
        );
    }
}
