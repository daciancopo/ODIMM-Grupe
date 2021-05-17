import React from "react"
import search from "../../images/Search.png";
import arrowUp from "../../images/Arrow-up.png";
import arrowDown from "../../images/Arrow-down.png";
import letter from "../../images/Letter.png";
import dots from "../../images/Dots.png";
import maria from "../../images/Maria.png";
import damon from "../../images/Damon.png";
import elena from "../../images/Elena.png";
import platon from "../../images/Platon.png";
import diane from "../../images/Diane.png";
import '../../App.css';

class PageCopy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };

    }

    show = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <React.Fragment>


                {/* First bars */}
                <div className="row first">
                    <div className="col-lg-12 col-md-10 col-sm-10">

                        {/* Blue bar */}
                        <div className="col-lg-11 col-md-8 col-sm-8 bar-style d-flex align-items-center ml-3 justify-centent-between">
                            <div className="col-lg-2 col-md-2 col-sm-2 d-flex align-items-center">
                                <input className="search-bar" placeholder="Search..."></input>
                                <button className="search-button"><img src={search} alt="Search"></img></button>
                            </div>
                            <div className="text-style col-lg-2  start-grupa d-flex align-items-center">
                                Start Grupa
            </div>
                            <div className="text-style col-lg-1  d-flex align-items-center">
                                Reusite
            </div>
                            <div className="text-style col-lg-1 d-flex align-items-center">
                                Cursuri
            </div>
                            <div className="text-style media-acurate d-flex align-items-center justify-content-center">
                                Media Acuratete
            </div>
                            <div className="text-style align-items-center d-block media">
                                Media Puncte
            </div>
                            <div className="text-style nr-useri d-flex align-items-center ml-4">
                                Nr de useri
            </div>
                            <div className="text-style col-lg-1 ml-3 d-flex align-items-center">
                                Actiuni
            </div>
                        </div>
                        {/* White bar */}
                        <div className="col-lg-11 col-md-8 col-sm-8 sub-bar-style d-flex align-items-center ml-3 justify-centent-between">
                            <div className="col-lg-2 col-md-2 col-sm-2 d-flex align-items-center">
                                <span className="nume-grupa">Nume Grupa</span>
                                <button className="arrow-button" onClick={this.show}>
                                    {this.state.show ? (
                                        <img src={arrowUp} alt="Arrow Up"></img>
                                    ) : (
                                        <img src={arrowDown} alt="Arrow Down"></img>
                                    )
                                    }
                                </button>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <div className="start-grupa-value d-flex justify-content-center ml-2">
                                    12.04.2022
                </div>
                            </div>
                            <div className="col-lg-1 reusite-value d-flex align-items-center justify-content-center">
                                <span className="">
                                    46 %

                </span>
                            </div>
                            <div className="col-lg-1 cursuri-value d-flex justify-content-end align-items-center">
                                7/10
            </div>
                            <div className="media-acurate-value d-flex align-items-center justify-content-center">
                                <span style={{ color: "#0AC993" }}>85%</span>
                                <div className="progress" style={{ height: "5px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: "85%", backgroundColor: "#0AC993" }} ariaValueNow="25" ariaValueMin="0" ariaValueMax="100"></div>
                                </div>
                                <div className="media-numar ml-3 d-flex align-items-center justify-content-center">
                                    4
                </div>
                            </div>
                            <div className="col-lg-1 align-items-center d-flex align-items-center justify-content-center media-value">
                                6789
            </div>
                            <div className="nr-useri-value d-flex align-items-center justify-content-center">
                                23
            </div>
                            <div className="col-lg-1 d-flex justify-content-between align-items-center">
                                <button className="action-buttons">
                                    <img src={letter} alt="Letter"></img>
                                </button>
                                <button className="action-buttons">
                                    <img src={dots} alt="Dots"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Table */}
                {this.state.show ? (
                    <div className="row table-row">
                        <div className="col-lg-11 col-md-8 col-sm-8 ml-3">
                            <table class="table-sm table-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <div className="d-flex align-items-center th-search">
                                                <input className="ml-2 search-bar" placeholder="Search..."></input>
                                                <button className="search-button"><img src={search} alt="Search"></img></button>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="text-style th-start-grupa d-flex align-items-center">
                                                Start
            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="text-style th-reusite d-flex align-items-center justify-content-start">
                                                Reusite
            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="text-style th-cursuri d-flex align-items-center justify-content-end">
                                                Cursuri
            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="text-style th-acurate d-flex align-items-center justify-content-center">
                                                Acuratete
            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="text-style align-items-center justify-content-start th-total-puncte">
                                                Total Puncte
            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="text-style th-nr-useri d-flex justify-content-center align-items-center">
                                                Nr de jocuri
            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="text-style th-actiuni d-flex align-items-center">
                                                Actiuni
            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* 1 Table tr */}
                                    <tr>
                                        <th scope="row">


                                            <img src={maria} alt="Maria"></img>
                                            <span className="table-text-style ml-3">
                                                Maria Popovici
                      </span>
                                        </th>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="start-grupa-value d-flex justify-content-center ml-2">
                                                    12.04.2022
                </div>
                                            </div>
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            4
                        </td>
                                        <td>
                                            <div className="cursuri-value d-flex justify-content-end align-items-center">
                                                7/10
            </div>
                                        </td>
                                        <td>
                                            <div className="media-acurate-value-th d-flex align-items-center justify-content-center">
                                                <span style={{ color: "#0AC993" }}>85%</span>
                                                <div className="progress" style={{ height: "5px" }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "85%", backgroundColor: "#0AC993" }} ariaValueNow="25" ariaValueMin="0" ariaValueMax="100"></div>
                                                </div>
                                                <div className="media-numar ml-3 d-flex align-items-center justify-content-center">
                                                    4
                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <div className="align-items-center d-flex align-items-center justify-content-center media-value">
                                                6789
            </div>
                                        </td>
                                        <td>
                                            <div className="nr-jocuri-value d-flex align-items-center justify-content-center">
                                                <span className="jocuri-text">
                                                    23
                          </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex th-action-buttons align-items-center">
                                                <button className="action-buttons">
                                                    <img src={letter} alt="Letter"></img>
                                                </button>
                                                <button className="action-buttons ml-2">
                                                    <img src={dots} alt="Dots"></img>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* 2 Table tr */}
                                    <tr>
                                        <th scope="row">


                                            <img src={damon} alt="Damon"></img>
                                            <span className="table-text-style ml-3">
                                                Simeon Damon
                      </span>
                                        </th>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="start-grupa-value d-flex justify-content-center ml-2">
                                                    12.04.2023
                </div>
                                            </div>
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            6
                        </td>
                                        <td>
                                            <div className="cursuri-value d-flex justify-content-end align-items-center">
                                                6/10
            </div>
                                        </td>
                                        <td>
                                            <div className="media-acurate-value-th d-flex align-items-center justify-content-center">
                                                <span style={{ color: "#0AC993" }}>50%</span>
                                                <div className="progress" style={{ height: "5px" }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "50%", backgroundColor: "#0AC993" }} ariaValueNow="25" ariaValueMin="0" ariaValueMax="100"></div>
                                                </div>
                                                <div className="media-numar ml-3 d-flex align-items-center justify-content-center">
                                                    8
                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <div className="align-items-center d-flex align-items-center justify-content-center media-value">
                                                4566
            </div>
                                        </td>
                                        <td>
                                            <div className="nr-jocuri-value d-flex align-items-center justify-content-center">
                                                <span className="jocuri-text">
                                                    45
                          </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex th-action-buttons align-items-center">
                                                <button className="action-buttons">
                                                    <img src={letter} alt="Letter"></img>
                                                </button>
                                                <button className="action-buttons ml-2">
                                                    <img src={dots} alt="Dots"></img>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* 3 Table tr */}
                                    <tr>
                                        <th scope="row">


                                            <img src={elena} alt="Elena"></img>
                                            <span className="table-text-style ml-3">
                                                Elena Martin
                      </span>
                                        </th>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="start-grupa-value d-flex justify-content-center ml-2">
                                                    12.04.2023
                </div>
                                            </div>
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            11
                        </td>
                                        <td>
                                            <div className="cursuri-value d-flex justify-content-end align-items-center">
                                                2/10
            </div>
                                        </td>
                                        <td>
                                            <div className="media-acurate-value-th d-flex align-items-center justify-content-center">
                                                <span style={{ color: "#0AC993" }}>60%</span>
                                                <div className="progress" style={{ height: "5px" }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "60%", backgroundColor: "#0AC993" }} ariaValueNow="25" ariaValueMin="0" ariaValueMax="100"></div>
                                                </div>
                                                <div className="media-numar ml-3 d-flex align-items-center justify-content-center">
                                                    3
                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <div className="align-items-center d-flex align-items-center justify-content-center media-value">
                                                1234
            </div>
                                        </td>
                                        <td>
                                            <div className="nr-jocuri-value d-flex align-items-center justify-content-center">
                                                <span className="jocuri-text">
                                                    67
                          </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex th-action-buttons align-items-center">
                                                <button className="action-buttons">
                                                    <img src={letter} alt="Letter"></img>
                                                </button>
                                                <button className="action-buttons ml-2">
                                                    <img src={dots} alt="Dots"></img>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* 4 Table tr */}
                                    <tr>
                                        <th scope="row">


                                            <img src={platon} alt="Platon"></img>
                                            <span className="table-text-style ml-3">
                                                Iriene Platon
                      </span>
                                        </th>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="start-grupa-value d-flex justify-content-center ml-2">
                                                    12.04.2023
                </div>
                                            </div>
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            6
                        </td>
                                        <td>
                                            <div className="cursuri-value d-flex justify-content-end align-items-center">
                                                3/10
            </div>
                                        </td>
                                        <td>
                                            <div className="media-acurate-value-th d-flex align-items-center justify-content-center">
                                                <span style={{ color: "#0AC993" }}>70%</span>
                                                <div className="progress" style={{ height: "5px" }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "70%", backgroundColor: "#0AC993" }} ariaValueNow="25" ariaValueMin="0" ariaValueMax="100"></div>
                                                </div>
                                                <div className="media-numar ml-3 d-flex align-items-center justify-content-center">
                                                    4
                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <div className="align-items-center d-flex align-items-center justify-content-center media-value">
                                                5678
            </div>
                                        </td>
                                        <td>
                                            <div className="nr-jocuri-value d-flex align-items-center justify-content-center">
                                                <span className="jocuri-text">
                                                    20
                          </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex th-action-buttons align-items-center">
                                                <button className="action-buttons">
                                                    <img src={letter} alt="Letter"></img>
                                                </button>
                                                <button className="action-buttons ml-2">
                                                    <img src={dots} alt="Dots"></img>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* 5 Table tr */}
                                    <tr>
                                        <th scope="row">


                                            <img src={diane} alt="Diane"></img>
                                            <span className="table-text-style ml-3">
                                                Diane Janson
                      </span>
                                        </th>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="start-grupa-value d-flex justify-content-center ml-2">
                                                    12.04.2023
                </div>
                                            </div>
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            12
                        </td>
                                        <td>
                                            <div className="cursuri-value d-flex justify-content-end align-items-center">
                                                2/10
            </div>
                                        </td>
                                        <td>
                                            <div className="media-acurate-value-th d-flex align-items-center justify-content-center">
                                                <span style={{ color: "#0AC993" }}>35%</span>
                                                <div className="progress" style={{ height: "5px" }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: "35%", backgroundColor: "#0AC993" }} ariaValueNow="25" ariaValueMin="0" ariaValueMax="100"></div>
                                                </div>
                                                <div className="media-numar ml-3 d-flex align-items-center justify-content-center">
                                                    6
                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <div className="align-items-center d-flex align-items-center justify-content-center media-value">
                                                7232
            </div>
                                        </td>
                                        <td>
                                            <div className="nr-jocuri-value d-flex align-items-center justify-content-center">
                                                <span className="jocuri-text">
                                                    11
                          </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex th-action-buttons align-items-center">
                                                <button className="action-buttons">
                                                    <img src={letter} alt="Letter"></img>
                                                </button>
                                                <button className="action-buttons ml-2">
                                                    <img src={dots} alt="Dots"></img>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}

            </React.Fragment>
        );
    }
}

export default PageCopy;
