import React from 'react';
import * as firebase from 'firebase';

export class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {        
        let database = firebase.database();
        let dataRef = database.ref().child('products');
        dataRef.on('value', snapshot => {
            this.setState({
                data: snapshot.val()
            });
            console.log(snapshot.val());
        }, error => {
            console.log(error);
        });

    }


    render() {
        return (
            <div>
                HELLO
            </div>
        );
    }
}
