import React from "react";
import App from "./App";
require('react-native');
require('react-native-elements')
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("root"));