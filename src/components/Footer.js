import React from 'react';

function Footer(props) {
    return(
        <footer clasName="site-footer">
            <div className="container-fluid" style={{border:"1px solid black"}}>
                <div className="row" >
                    <div className="col-4" >
                        <div className="row">
                            <strong>Company Logo</strong>
                        </div>
                        <div className="row mt-2">
                            Using our to-do lists will make you a better person!
                        </div>
                        <div className="row mt-2">
                            <div className="col-3">
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                            </div>
                            <div className="col-3">
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                            </div>
                            <div className="col-3">
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                            </div>
                            <div className="col-3">
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <p>FEATURES</p>
                                    <ul>
                                        <li><a href="#">How It Works</a></li>
                                        <li><a href="#">Link 2</a></li>
                                        <li><a href="#">Link 3</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <p>RESOURCES</p>
                                    <ul>
                                        <li><a href="#">Download App</a></li>
                                        <li><a href="#">Link 2</a></li>
                                        <li><a href="#">Link 3</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <p>COMPANY</p>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Link 3</a></li>
                                    </ul>
                                </div>
                        </div>
                        </div>

                    </div>
                </div>
                <div className="row" style={{border:"1px solid black"}}>
                    <div className="col">
                      <a href="#">Privacy</a>   
                    </div>
                    <div className="col">
                        <a href="#">Terms</a>
                    </div>
                    <div className="col">
                            Company Name Inc 
                        </div>
                </div>
        
            </div>
        </footer>

    );
}

export default Footer;