import React from "react";

class Centerpiece extends React.Component {
  render() {
    return (
      <div className="center-container">
        <div className="main-logo">
          <img src="logo.png" width="250" height="250" alt="image" />
        </div>
        <div className="main-message">
          <p>McGill's Official Hacker Collective</p>
        </div>

        <style jsx>{`
        .center-container {
            padding-top: 100px ;
        }
          .main-logo {
            //   width: 100%;
            //   height: 100%;
            //   min-height: 100vh;
            //   display: flex;
            //   justify-content: center;
            //   align-items: center;
            width: 100%;
            height: 100%;

            display: flex;
            padding: 0 0;
            justify-content: center;
            align-items: center;
          }
          .main-message {
            display: flex;
            padding: 0 0;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}
export default Centerpiece;
