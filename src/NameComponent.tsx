import * as React from "react";
import Name from "./NameInterface";
import InfoRadioComponent from "./InfoRadioComponent";

let style = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%"
}

export default class NameComponent extends React.Component<Name, {}>{
    constructor(props: Name){
        super(props);
    }

    render(){
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="https://dxj7eshgz03ln.cloudfront.net/production/link/image/147296/original_ratio_extra_large_5abba77a-f2c2-42e8-96ae-84dd7d589977.gif" width="30" height="30" alt="" />
            </a>
            <a className="navbar-brand">{this.props.name}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <InfoRadioComponent showProjects={this.props.showProjects} />
            </nav>
            );
    }
}