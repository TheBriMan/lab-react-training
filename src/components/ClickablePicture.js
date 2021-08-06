
import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    picture: this.props.img,
  };

  handleClick = () => {
    this.state.picture === this.props.img
      ? this.setState({ picture: this.props.imgClicked })
      : this.setState({ picture: this.props.img });
  };

  render() {
    return (
      <img
        onClick={this.handleClick}
        src={this.state.picture}
        alt="guy-with-glasses-and-without-glasses-onClick"
      />
    );
  }
}
export default ClickablePicture;