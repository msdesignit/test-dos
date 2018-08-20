import React from 'react';
import PropTypes from 'prop-types';

class ShowcaseButton extends React.Component {
  render() {
    const {buttonContent, onClick} = this.props;
    return (
      <button
        className="showcase-button"
        onClick={onClick}>
        {buttonContent}
      </button>
    );
  }
}

ShowcaseButton.PropTypes = {
  buttonContent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ShowcaseButton;