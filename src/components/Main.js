import React, { Component} from "react";
import Header from "./Header";
import Footer from "./Footer"
import Navigation from "./Navagation";
import Tool from "./Tool";
import Dashboard from "./Dashboard";

class Main extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4 text-center" style={{border:"1px solid black"}}>
                                <Tool />
                            </div>
                            <div className="col text-center" style={{border:"1px solid black"}}>
                                <Dashboard/>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    };

}


export default Main