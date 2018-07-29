import * as React from "react";

let style = {
    display: "inline-block",
    verticalAlign: "middle"
};

export default class InfoRadioComponent extends React.Component<{showProjects: Function},{projects: boolean}> {
    constructor(props){
        super(props);
        this.state = {projects: true};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.showProjects();
        this.setState({projects: !this.state.projects})
    }

    render(){
        const activeClass = "btn btn-secondary active";
        const notActiveClass = "btn btn-secondary";
        return (
            <div style={style} className="btn-group btn-group-toggle text-center" data-toggle="buttons" onChange={this.handleChange}>
                <label className={this.state.projects ? activeClass: notActiveClass}>
                    <input type="radio" name="options" id="option1" data-autocomplete="off" /> Projects
                </label>
                <label className={!this.state.projects ? activeClass: notActiveClass}>
                    <input type="radio" name="options" id="option2" data-autocomplete="off" /> Experiences
                </label>
            </div>
        );
    }
}