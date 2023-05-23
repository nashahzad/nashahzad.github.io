import * as React from "react";
import * as ReactDOM from "react-dom";
import NameComponent from "./src/NameComponent";
import PanelComponent from "./src/PanelComponent";
import FooterComponent from "./src/FooterComponent";

class App extends React.Component<{},{projects: boolean, name: string}>{
    constructor(props){
        super(props);
        this.state = {projects: false, name: "Nauman Shahzad"};
        this.showProjects = this.showProjects.bind(this);
    }

    showProjects(show: boolean){
        const newState = show ? false: true;
        this.setState({projects: newState});
    }

    render(){
        return <div>
        <NameComponent name={this.state.name} showProjects={this.showProjects} />
        <PanelComponent projects={this.state.projects}/>
        <FooterComponent />
        </div>;
    }
}


ReactDOM.render(<App />, document.getElementById('root'));