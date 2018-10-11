import React from "react";

class ResourceCard extends React.Component {


    constructor() {
        super();
        this.state = {
            LastUpdate: "7 hours"
        }
    }

    render() {
        return (
            <div class="col-lg-3 col-sm-6">
                <div class="card">
                    <div class="content">
                        <div class="row">
                            <div class="col-xs-5">
                                <div class="icon-big icon-success text-center">
                                    <i className={this.props.icon} />
                                </div>
                            </div>
                            <div class="col-xs-7">
                                <div class="numbers">
                                    <p>{this.props.title}</p>
                                     <p style={{ display: "inline-block" }} class="text-success">Number of lines executed</p>{this.props.executing}
                                    <br />
                                    <p style={{ display: "inline-block" }} class="text-info">Number of peers connected</p>{this.props.no_of_peers}
                                    <br/>
                                   <p style={{ display: "inline-block" }} class="text-info">Running Status</p>{this.props.status}
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <hr />
                            <div class="stats">
                                <i class="ti-time" /> Last Updated {this.state.LastUpdate} ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ResourceCard;
