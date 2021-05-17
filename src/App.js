import React from "react"
// import search from "./images/Search.png";
// import arrowUp from "./images/Arrow-up.png";
// import arrowDown from "./images/Arrow-down.png";
// import letter from "./images/Letter.png";
// import dots from "./images/Dots.png";
// import maria from "./images/Maria.png";
import './App.css';
import PageCopy from "./components/PageCopy/pageCopy";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: false,
  //   };

  // }

  // show = () => {
  //   this.setState({
  //     show: !this.state.show
  //   })
  // }
  render() {
    return (
      <div className="container mt-3 ">
        <div className="row row-style overflow-auto">
          <div className="col-lg-10 col-md-10 col-sm-10">
            <p className="title mt-4 mb-4">Lista de grupe</p>
          </div>

          <PageCopy />
          <PageCopy />
          <PageCopy />
          <PageCopy />
          <PageCopy />

        </div>
      </div>
    );
  }
}

export default App;
