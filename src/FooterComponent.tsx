import * as React from "react";

const FooterComponent: React.SFC<{}> = (props) => {
    return (
        <div className="container text-center">
                <a href="https://www.linkedin.com/in/nauman-shahzad-842944a5/" target="_blank">
                <img className="social-icons" src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="" />
                </a>

                <a href="https://github.com/nashahzad" target="_blank">
                <img className="social-icons" src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" />
                </a>
        </div>
    );
} 

export default FooterComponent;
