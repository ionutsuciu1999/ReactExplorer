import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

import WindowFooter from "./components/AppFooter"
import WindowHeader from "./components/AppHeader"
import "./index.css"


ReactDOM.render( <>
                    <div id="background"></div>
                    <WindowHeader />
                        <App />
                    <WindowFooter />
                </>, 
                document.getElementById("root"));