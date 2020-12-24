import React from 'react';

export default function Button(props) {
    return (
        <React.Fragment>
            <button onClick={props.onClick} data-testid="button">
                {props.children}
            </button>
        </React.Fragment>
    );
}