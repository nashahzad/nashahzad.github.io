import * as React from "react";

let style = {
    display: "inline-block",
    verticalAlign: "middle",
    marginBottom: 10
};

export default class InfoRadioComponent extends React.Component<{showProjects: Function},{projects: boolean}> {
    constructor(props){
        super(props);
        this.state = {projects: true};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const show = e.target.value === "projects" ? false: true;
        this.props.showProjects(show);
        this.setState({projects: !show})
    }

    render(){
        const activeClass = "btn btn-outline-success";
        const notActiveClass = "btn btn-sm btn-outline-secondary";
        return (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <button value="projects" className={this.state.projects ? activeClass: notActiveClass} type="button" onClick={this.handleChange}>Projects <span className="sr-only">(current)</span></button>
                <button value="experiences" className={!this.state.projects ? activeClass: notActiveClass} type="button" onClick={this.handleChange}>Experiences</button>
                </div>
            </div>
        );
    }
}