import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {
    render() {
        const {headline, description, tempAr} = this.props;
        return (
            <React.Fragment>
                <div>
                    <h3>{headline}</h3>
                    <p>{description}</p>
                </div>
            </React.Fragment>
        );
    }
}

Headline.propTypes = {
    headline:PropTypes.string,
    description:PropTypes.string,
    tempAr:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        city:PropTypes.string,
        isOnline:PropTypes.bool
    }))
};
