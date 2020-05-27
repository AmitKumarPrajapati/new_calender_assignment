import React from "react";
import "./SingleCard.css";
import DialogBox from "../DialogBox";
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
  render() {
    const { time, status, day, date, month, setDialogOpen } = this.props;
    return (
      <div
        onClick={() => setDialogOpen(time, status, day, date, month)}
        className={this.addClassToCard(status)}
      >
        <div>
          <p className="card-time-font">{time}</p>
          <p className="card-status-font">{status}</p>
        </div>
      </div>
    );
  }
}

export default SingleCard;
