import React from 'react';
import { provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';
class Application extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        var Handler = this.props.currentRoute.handler;

        return (
            <div>
                <Handler />
            </div>
        );
    }
}
Application = (
    provideContext(
        handleHistory(Application,
            {enableScroll: false}
        )
    )
);
export default Application;
