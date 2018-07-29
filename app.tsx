import * as React from "react";
import * as ReactDOM from "react-dom";
import Name from "./src/NameComponent";
import InfoRadioComponent from "./src/InfoRadioComponent";
import PanelComponent from "./src/PanelComponent";

class App extends React.Component<{},{projects: boolean, name: string}>{
    constructor(props){
        super(props);
        this.state = {projects: true, name: "Nauman Shahzad"};
        this.showProjects = this.showProjects.bind(this);
    }

    showProjects(show: boolean){
        const newState = show ? false: true;
        this.setState({projects: newState});
    }

    render(){
        return <div>
        <Name name={this.state.name} showProjects={this.showProjects} />
        <PanelComponent projects={this.state.projects}/>
        </div>;
    }
}


ReactDOM.render(<App />, document.getElementById('root'));