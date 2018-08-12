import * as React from "react";

const FooterComponent: React.SFC<{}> = (props) => {
    return (
        <div className="text-center">
                <a href="https://www.linkedin.com/in/nauman-shahzad-842944a5/" target="_blank">
                <img className="social-icons" src="https://image.flaticon.com/icons/svg/56/56591.svg" alt="" />
                </a>

                <a href="https://github.com/nashahzad" target="_blank">
                <img className="social-icons" src="https://image.flaticon.com/icons/svg/2/2600.svg" alt="" />
                </a>
        </div>
    );
} 

export default FooterComponent;
