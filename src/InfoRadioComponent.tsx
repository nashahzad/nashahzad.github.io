import * as React from "react";

export default class InfoRadioComponent extends React.Component<{showProjects: Function},{projects: boolean}> {
    constructor(props){
        super(props);
        this.state = {projects: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const show = e.target.value === "projects" ? false: true;
        this.props.showProjects(show);
        this.setState({projects: !show})
    }

    render(){
        const activeClass = "nav-item nav-link btn btn-outline-success";
        const notActiveClass = "nav-item nav-link btn btn-sm btn-outline-secondary";
        return (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <button value="experiences" className={!this.state.projects ? activeClass: notActiveClass} type="button" onClick={this.handleChange}>Experiences</button>
                    <button value="projects" className={this.state.projects ? activeClass: notActiveClass} type="button" onClick={this.handleChange}>Projects </button>
                </div>
            </div>
        );
    }
}