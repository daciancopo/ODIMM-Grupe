import React from "react"
import './App.css';
import ListComponent from "./components/ListComponent/listComponent";

class App extends React.Component {

  render() {
    return (
      <div className="container mt-3 ">
        <div className="row row-style overflow-auto">
          <div className="col-lg-10 col-md-10 col-sm-10">
            <p className="title mt-4 mb-4">Lista de grupe</p>
          </div>

          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />

        </div>
      </div>
    );
  }
}

export default App;
