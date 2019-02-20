import './prelude.js'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Foo from './foo.js'
import {Bar, } from './bar.js'
import * as Bar2 from './bar.js'


const IS_BROWSER = process.platform === 'browser';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const ENV = IS_PRODUCTION ? "production" : "development";

if ( IS_BROWSER ) {
    window.React = React;
    window.ReactDOM = ReactDOM;
    window.HomePage = HomePage;
}


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let self = this;
        console.log(self);
    }

    render() {
        // React.createElement("h1", null, "Hi, 世界！")
        return (
            <div>
                <h1>Hi, 世界！</h1>
            </div>
        )
    }
}


function main(){
    console.info("ENV: " + ENV );
    console.info("Platform: " + process.platform);

    console.log(Foo);
    console.log(Bar);
    console.log(Bar2);

    if ( IS_BROWSER ) {
        let container = window.document.getElementById("react-container");
        // ReactDOM.render(<HomePage />, container);
        ReactDOM.render(React.createElement(HomePage), container);
    } else {
        console.log(new HomePage());
    }
}


if ( IS_BROWSER ) {
    window.onload = main;
} else {
    main();
}
