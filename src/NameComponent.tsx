import * as React from "react";
import Name from "./NameInterface";

export default class NameComponent extends React.Component<Name, {}>{
    constructor(props: Name){
        super(props);
    }

    render(){
        return <h1> {this.props.name} </h1>;
    }
}