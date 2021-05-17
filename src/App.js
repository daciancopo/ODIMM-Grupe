import React from "react"
import './App.css';
import PageCopy from "./components/PageCopy/pageCopy";

class App extends React.Component {

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
