import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    showSubTitle( subTitle ) {
        if ( subTitle ) {
            return subTitle;
        }
    }
    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    <h2 className="title-bar__subtitle">{this.showSubTitle(this.props.subtitle)}</h2>
                </div>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
    //title: 'Default title'
}