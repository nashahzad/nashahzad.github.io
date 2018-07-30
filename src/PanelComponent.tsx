import * as React from "react";
import {projects, experiences} from "./Constants";

const PanelComponent: React.SFC<{projects: boolean}> = (props) =>{
    const panelContents = props.projects ? projects: experiences;
        var body = panelContents.map((panelContent, i) => {
            return (
            <div className="card" key={"card_" + i}>
                <div className="card-body">
                    <h4 className="card-title">{panelContent.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{panelContent.startDate} - {panelContent.endDate}</h6>
                    <ul className="card-text">
                        {panelContent.description.split('. ').map((sentence, i) =>{
                            if(sentence === ''){
                                return '';
                            }
                            return <li key={"item_" + i}> {sentence} </li>
                        })}                        
                    </ul>
                    {panelContent.href != null ? <a href={panelContent.href} className="card-link" target="_blank">{panelContent.hrefLabel}</a>: ''}
                </div>
            </div>);
        });

        return <div> {body} </div>;
}

export default PanelComponent;
