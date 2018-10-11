import React, { Component } from "react";
import ResourceCard from "../components/ResourceCard";
import ResourceUsage from "../components/ResourceUsage";
import ProcessViewer from "../components/codeviewer/CodeView";

class Dashboard extends Component {
    constructor(props, { authData }) {
        super(props);
    }

    render() {
        return (
            <div class="content">
                <div className="row">
                    <div class="col-md-6 card card-stats">
                        <div class="image">
                            <img src="./assets/img/saddle.jpg" alt="..." />
                        </div>
                    </div>
					<div class="well col-md-6">
						<h1>
							Total Devices Connected: 6
						</h1>
						<h1>
							Total Running Devices: 4
						</h1>
					</div>
                </div>


                <div class="row">
                    <ResourceCard title="Device 1" icon="ti-desktop" executing={1000} no_of_peers={100} status={"Compiling"} />

                    <ResourceCard title="Device 2" icon="ti-desktop" executing={1000} no_of_peers={100} status={"Terminated"} />

                    <ResourceCard title="Device 3" icon="ti-desktop" executing={1000} no_of_peers={100} status={"Running"}/>

                    <ResourceCard title="Device 4" icon="ti-desktop" executing={1000} no_of_peers={100} status={"Compiling"}/>

                    <ResourceUsage title="Software Updates Done" icon="ti-cloud-up" percentage={23} />

                    <ResourceUsage title="No of failures" icon="ti-stats-down" percentage={36} />
                    
					<ResourceUsage title="Memory Usage" icon="ti-harddrives" percentage={48} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
