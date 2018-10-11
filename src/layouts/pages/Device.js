import React from "react";
import LiveCodeView from "../components/codeviewer/LiveCodeView";

class Device extends React.Component {

    state = {
        status: "Running",
        packageVersion: 1212435214,
        device: {}
    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            deviceId: this.props.match.params.deviceId,
        }
    }

    render() {
        const device = this.props.devices[this.state.deviceId] || {};

        return (
            <div class="content">
                <h3>Device: {this.state.deviceId}</h3>
                <div class="row">
                    <div class="col-lg-4 col-md-5">
                        <div class="card card-user">
                            <div class="image">
                                <img src="/assets/img/pi.jpg" alt="..." />
                            </div>
                            <div class="content">
                                <div class="author">
                                    <img class="avatar border-white" src="/assets/img/pi_logo.webp" alt="..." />
                                    <h4 class="title">Raspberry Pi {this.state.deviceId}<br />
                                        <a href="#"><small>@Node1</small></a>
                                    </h4>
                                </div>
                                <p class="description text-center">
                                    <center>
                                        <form action={"http://"+device.host+"/upload_code"} method="POST"
                                            enctype="multipart/form-data" target="blank">
                                            <input type="file" name="file" />
                                            <input type="submit" />
                                        </form>
                                        <table>
                                            <tr>
                                                <th width="100">STATUS</th>
                                                <td width="100" class="text-success">Running</td>
                                            </tr>
                                            <tr>
                                                <th width="100">HOST</th>
                                                <td width="100" class="text-success">{device.host}</td>
                                            </tr>
                                            <tr>
                                                <th width="100">VERSION</th>
                                                <td width="100" class="text-success">1.0.0</td>
                                            </tr>
                                            <tr>
                                                <th width="100">UPDATE</th>
                                                <td width="100" class="text-success">1 Hours Ago</td>
                                            </tr>
                                        </table>
                                    </center>
                                </p>
                            </div>
                            <hr />
                            <div class="text-center">
                                <div class="row">
                                    <div class="col-md-3 col-md-offset-1">
                                        <h5>120MB<br /><small>Memory</small></h5>
                                    </div>
                                    <div class="col-md-4">
                                        <h5>2%<br /><small>CPU</small></h5>
                                    </div>
                                    <div class="col-md-3">
                                        <h5>1.2KB<br /><small>SIZE</small></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h4 class="title">Peers</h4>
                            </div>
                            <div class="content">
                                <ul class="list-unstyled team-members">
                                    <li>
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <div class="avatar">
                                                    <img src="/assets/img/faces/face-0.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive" />
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                DJ Khaled
                                                        <br />
                                                <span class="text-muted"><small>Offline</small></span>
                                            </div>

                                            <div class="col-xs-3 text-right">
                                                <btn class="btn btn-sm btn-success btn-icon"><i class="fa fa-envelope"></i></btn>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="well">
                            <LiveCodeView deviceId={this.state.deviceId} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Device;