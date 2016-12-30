import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import Layout from "./pages/Layout"
import store from "./stores/store"

//require("./index.css");

const app = document.getElementById("root");

ReactDOM.render(<Provider store={store}>
	<Layout />
</Provider>,app);