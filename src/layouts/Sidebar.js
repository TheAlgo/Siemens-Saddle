import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {


    isActive(path) {
        if (this.props.location.pathname == path) return "active";
        else return "";
    }

    render() {
        const devices = this.props.devices || {};
        return (
            <div className="sidebar" data-background-color="black" data-active-color="danger">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <Link to="/" className="simple-text">
                            SADDLE
                        </Link>
                    </div>

                    <ul className="nav">
                        <li className={this.isActive("/")}>
                            <Link to="/">
                                <i className="ti-panel" />
                                <p>DASHBOARD</p>
                            </Link>
                        </li>
                        {Object.keys(devices).map(deviceId => (
                            <li className={this.isActive("/device/"+deviceId)}>
                                <Link to={"/device/"+deviceId}>
                                    <i className="ti-panel" />
                                    <p>RPI {deviceId}</p>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
