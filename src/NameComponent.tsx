import * as React from "react";
import Name from "./NameInterface";

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
            <h1 className="jumbotron-heading text-center" style={style}> 
                {this.props.name} 
            </h1>);
    }
}