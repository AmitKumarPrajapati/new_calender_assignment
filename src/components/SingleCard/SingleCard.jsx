import React from "react";
import "./SingleCard.css";
/* Single Card component */
class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  /* function for adding classes to card */
  addClassToCard = (status) => {
    if (status === "Blocked") {
      return "card-blocked-state";
    } else if (status === "Open") {
      return "card-open-state";
    }
    return "card-box";
  };

  /* function for handle the click on card */
  handleCardClick = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const { time, status } = this.props;
    return (
      <div
        onClick={() => this.handleCardClick()}
        className={this.addClassToCard(status)}
      >
        <div>
          <p className="card-time-font">{time}</p>
          <p className="card-status-font">{status}</p>
        </div>
        <div></div>
      </div>
    );
  }
}

export default SingleCard;
