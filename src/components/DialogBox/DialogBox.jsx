import React from "react";
import "./DialogBox.css";

class DialogBox extends React.Component {
  render() {
    const { time, status, setDialogOpen, day, date, month } = this.props;
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
          <div>
            <h2>{status}</h2>
            <h5>{`${day}, ${month} ${date} at ${time}`}</h5>
          </div>
          <div className="repeat-text">Repeates every day</div>
          <div className="button-section">
            <button className="res-btn">Reschedule</button>
            <button onClick={() => setDialogOpen()} className="cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogBox;
