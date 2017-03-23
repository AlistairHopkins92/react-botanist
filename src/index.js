import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

const Root = () => {
    return (
        <BrowserRouter>
            <h1>THE BOTANIST</h1>
        </BrowserRouter>
    )

}

render(<Root/>, document.querySelector('#main')); 