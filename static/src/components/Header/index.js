import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppBar from 'material-ui/AppBar';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import * as actionCreators from '../../actions/auth';

function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

    }

    dispatchNewRoute(route) {
        browserHistory.push(route);
        this.setState({
            open: false,
        });

    }


    handleClickOutside() {
        this.setState({
            open: false,
        });
    }


    logout(e) {
        e.preventDefault();
        this.props.logoutAndRedirect();
        this.setState({
            open: false,
        });
    }

    openNav() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <header>
                {/*<LeftNav open={this.state.open}>*/}
                    {/*{*/}
                        {/*!this.props.isAuthenticated ?*/}
                            {/*<div>*/}
                                {/*<MenuItem onClick={() => this.dispatchNewRoute('/login')}>*/}
                                    {/*Login*/}
                                {/*</MenuItem>*/}
                                {/*<MenuItem onClick={() => this.dispatchNewRoute('/register')}>*/}
                                    {/*Register*/}
                                {/*</MenuItem>*/}
                            {/*</div>*/}
                            {/*:*/}
                            {/*<div>*/}
                                {/*<MenuItem onClick={() => this.dispatchNewRoute('/analytics')}>*/}
                                    {/*Analytics*/}
                                {/*</MenuItem>*/}
                                {/*<Divider/>*/}

                                {/*<MenuItem onClick={(e) => this.logout(e)}>*/}
                                    {/*Logout*/}
                                {/*</MenuItem>*/}
                            {/*</div>*/}
                    {/*}*/}
                {/*</LeftNav>*/}
                {/*<AppBar style={{position: 'fixed'}}*/}
                        {/*title="Priority Attachment: a Universal Mechanism for Generating Networks"*/}
                        {/*onLeftIconButtonTouchTap={() => this.openNav()}*/}
                        {/*iconElementRight={*/}
                            {/*<FlatButton label="Home" onClick={() => this.dispatchNewRoute('/')}/>*/}
                        {/*}*/}
                {/*/>*/}


                <div className="w3-top">
                    <div className="w3-bar w3-card w3-animate-top w3-white" id="myNavbar">
                        <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
                           href="javascript:void(0);" onClick={() => this.dispatchNewRoute('/')} title="Toggle Navigation Menu">
                            <i className="fa fa-bars"></i>
                        </a>
                        <a href="#home" className="w3-bar-item w3-button">PRIORITY ATTACHMENT</a>
                        <a href="#what" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-file-text-o"></i>
                            DESCRIPTION</a>
                        <a href="#demo" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-line-chart"></i>
                            DEMO</a>
                        <a href="#publication" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i>
                            PUBLICATION</a>
                    </div>


                    <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                        <a href="#about" className="w3-bar-item w3-button" onClick={() => this.dispatchNewRoute('/')}>ABOUT</a>
                        <a href="#portfolio" className="w3-bar-item w3-button" onClick={() => this.dispatchNewRoute('/')}>PORTFOLIO</a>
                        <a href="#contact" className="w3-bar-item w3-button" onClick={() => this.dispatchNewRoute('/')}>CONTACT</a>
                    </div>
                </div>
            </header>

        );
    }
}

Header.propTypes = {
    logoutAndRedirect: React.PropTypes.func,
    isAuthenticated: React.PropTypes.bool,
};


window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
