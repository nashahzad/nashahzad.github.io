import * as React from "react";
import {projects, experiences} from "./Constants";

export default class PanelComponent extends React.Component<{projects: boolean}, {}> {
    constructor(props){
        super(props);
    }

    render(){
        const panelContents = this.props.projects ? projects: experiences;
        var body = panelContents.map((panelContent, i) => {
            return (
            <div className="card" key={"card_" + i}>
                <div className="card-body">
                    <h4 className="card-title">{panelContent.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{panelContent.startDate} - {panelContent.endDate}</h6>
                    <p className="card-text">{panelContent.description}</p>
                    {panelContent.href != null ? <a href={panelContent.href} className="card-link" target="_blank">{panelContent.hrefLabel}</a>: ''}
                </div>
            </div>);
        });

        console.log(body);

        return <div> {body} </div>;
    }
}