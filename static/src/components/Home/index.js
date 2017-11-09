import React from 'react';
import Graph from 'react-graph-vis';
import './styles.scss';
import DropDownDistanceMenu from "./dropDownDistanceMenu";
import SimpleLineChart from "./simpleLineChart";
import CustomSlider from "./customSlider";
import {RaisedButton} from "material-ui";
// import ReactHeatmap from 'react-heatmap';
// import CustomDistanceTable from "./customDistanceTable";
// import CustomDistanceMatrix from "./customDistanceMatrix";
import PdfIcon from 'react-icons/lib/fa/file-pdf-o'
// import InlineMath from 'react-katex';
import DistanceDescription from './distanceDescription'

var graph = {
    nodes: [
        {id: 1, label: ''},
        {id: 2, label: ''},
        {id: 3, label: ''},
        {id: 4, label: ''},
        {id: 5, label: ''},
        {id: 6, label: ''},
        {id: 7, label: ''},
        {id: 8, label: ''},
        {id: 9, label: ''},
        {id: 10, label: ''},
        {id: 11, label: ''},
        {id: 12, label: ''},
        {id: 13, label: ''},
        {id: 14, label: ''},
        {id: 15, label: ''},
        {id: 16, label: ''},
        {id: 17, label: ''},
        {id: 18, label: ''},
        {id: 19, label: ''},
        {id: 20, label: ''},
        {id: 21, label: ''},
        {id: 22, label: ''},
        {id: 23, label: ''},
        {id: 24, label: ''},
        {id: 25, label: ''},
        {id: 26, label: ''},
        {id: 27, label: ''},
        {id: 28, label: ''},
        {id: 29, label: ''},
        {id: 30, label: ''},
        {id: 31, label: ''},
        {id: 32, label: ''},
        {id: 33, label: ''},
        {id: 34, label: ''}
    ],
    edges: [
        {from: 2, to: 1},
        {from: 3, to: 1},
        {from: 3, to: 2},
        {from: 4, to: 1},
        {from: 4, to: 2},
        {from: 4, to: 3},
        {from: 5, to: 1},
        {from: 6, to: 1},
        {from: 7, to: 1},
        {from: 7, to: 5},
        {from: 7, to: 6},
        {from: 8, to: 1},
        {from: 8, to: 2},
        {from: 8, to: 3},
        {from: 8, to: 4},
        {from: 9, to: 1},
        {from: 9, to: 3},
        {from: 10, to: 3},
        {from: 11, to: 1},
        {from: 11, to: 5},
        {from: 11, to: 6},
        {from: 12, to: 1},
        {from: 13, to: 1},
        {from: 13, to: 4},
        {from: 14, to: 1},
        {from: 14, to: 2},
        {from: 14, to: 3},
        {from: 14, to: 4},
        {from: 17, to: 6},
        {from: 17, to: 7},
        {from: 18, to: 1},
        {from: 18, to: 2},
        {from: 20, to: 1},
        {from: 20, to: 2},
        {from: 22, to: 1},
        {from: 22, to: 2},
        {from: 26, to: 24},
        {from: 26, to: 25},
        {from: 28, to: 3},
        {from: 28, to: 24},
        {from: 28, to: 25},
        {from: 29, to: 3},
        {from: 30, to: 24},
        {from: 30, to: 27},
        {from: 31, to: 2},
        {from: 31, to: 9},
        {from: 32, to: 1},
        {from: 32, to: 25},
        {from: 32, to: 26},
        {from: 32, to: 29},
        {from: 33, to: 3},
        {from: 33, to: 9},
        {from: 33, to: 15},
        {from: 33, to: 16},
        {from: 33, to: 19},
        {from: 33, to: 21},
        {from: 33, to: 23},
        {from: 33, to: 24},
        {from: 33, to: 30},
        {from: 33, to: 31},
        {from: 33, to: 32},
        {from: 34, to: 9},
        {from: 34, to: 10},
        {from: 34, to: 14},
        {from: 34, to: 15},
        {from: 34, to: 16},
        {from: 34, to: 19},
        {from: 34, to: 20},
        {from: 34, to: 21},
        {from: 34, to: 23},
        {from: 34, to: 24},
        {from: 34, to: 27},
        {from: 34, to: 28},
        {from: 34, to: 29},
        {from: 34, to: 30},
        {from: 34, to: 31},
        {from: 34, to: 32},
        {from: 34, to: 33}
    ]
};

var options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000",
        shadow: true,
        smooth: true
    },
    nodes: {
        shadow: true,
        labelHighlightBold: true
    },
    autoResize: true

};

var events = {
    select: function (event) {
        var {nodes, edges} = event;
    }
};

// var Graph = require('react-graph-vis');


export const Home = () =>
    <section className="container-fluid" style={{padding: 0, margin: 0}}>
        <div>
            <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div className="w3-display-middle">
                    <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">PRIORITY <span
                        className="w3-hide-small">ATTACHMENT</span></span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="w3-content w3-container w3-padding-64" id="what">
                    <h3 className="w3-center">PRIORITY ATTACHMENT</h3>
                    <p className="w3-center"><em>What is it for?</em></p>
                    <p>We claim that networks are created according to the priority attachment mechanism and we show a
                        simple model which uses the priority attachment to generate both synthetic and close to
                        empirical networks. Priority attachment is a mechanism which generalizes previously proposed
                        mechanisms, such as small world creation or preferential attachment, but we also observe its
                        presence in a range of real-world networks. In this paper we show that by using priority
                        attachment we can generate networks of very diverse topologies, as well as recreate empirical
                        networks. An additional advantage of the priority attachment mechanism is an easy interpretation
                        of the latent processes of network formation. We substantiate our claims by performing numerical
                        experiments on synthetic and empirical networks. The two main contributions of the paper are:
                        the introduction of the priority attachment mechanism, and the design of the Priority Rank: a
                        simple network generative model based on the priority attachment mechanism.</p>
                </div>
            </div>
        </div>
        <div className="bg-grey">
            <div className="row" id="how">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    <div className="w3-content w3-container w3-padding-64">
                        <h3 className="w3-center">PRIORITY ATTACHMENT</h3>
                        <p className="w3-center"><em>How it works?</em></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <div className="w3-content w3-container w3-padding-8">
                        <p>
                            <span className="glyphicon glyphicon-th"></span>
                        </p>
                    </div>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                    <div className="w3-content w3-container w3-padding-8">
                        <p>
                            <span className="fa fa-long-arrow-right"></span>
                        </p>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <div className="w3-content w3-container w3-padding-8">
                        <p>
                            <span className="fa fa-list-ol"></span>
                        </p>
                    </div>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                    <div className="w3-content w3-container w3-padding-8">
                        <p>
                            <span className="fa fa-long-arrow-right"></span>
                        </p>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <div className="w3-content w3-container w3-padding-8">
                        <p>
                            <span className="fa fa-list-ol"></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <div className="w3-content w3-container w3-padding-32">
                        <h4>Distances</h4>
                    </div>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                    <div className="w3-content w3-container w3-padding-32">
                        <p>

                        </p>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <div className="w3-content w3-container w3-padding-32">
                        <h4>Rankings</h4>
                    </div>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                    <div className="w3-content w3-container w3-padding-32">
                        <p>

                        </p>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <div className="w3-content w3-container w3-padding-32">
                        <h4>Network</h4>
                    </div>
                </div>
            </div>

            {/*<div className="bgimg-2 w3-display-container w3-opacity-min">*/}
            {/*<div className="w3-display-middle">*/}
            {/*<span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>*/}
            {/*</div>*/}
            {/*</div>*/}
        </div>
        <div className="row" id="demo">
            <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="w3-content w3-container w3-padding-64">
                    <h3 className="w3-center">PRIORITY ATTACHMENT</h3>
                    <p className="w3-center"><em>Generate network in 3 steps</em></p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="w3-content w3-container w3-padding-16 w3-right">
                            <div className="numberCircle">1</div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="w3-content w3-container w3-padding-16 w3-left">
                            <h3>Network size:</h3>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
                        <div className="w3-content w3-container w3-center">
                            <CustomSlider/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="w3-content w3-container w3-padding-16 w3-right">
                            <div className="numberCircle">2</div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="w3-content w3-container w3-padding-16 w3-left">
                            <h3>Distance:</h3>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
                        <div className="w3-content w3-container w3-left w3-padding-0">
                            <DropDownDistanceMenu/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="w3-content w3-container w3-padding-16 w3-right">
                            <div className="numberCircle">3</div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="w3-content w3-container w3-padding-16 w3-left">
                            <h3>Run:</h3>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
                        <div className="w3-content w3-container w3-padding-16 w3-left">
                            <RaisedButton label="Generate graph" primary={true}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h4>Preview distances</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <DistanceDescription value={"degree"}/>
                        {/*<Tex texContent={"\\frac{1}{C_D(v_j) + \\epsilon}"}/>*/}
                        {/*<InlineMath math="\\frac{1}{C_D(v_j) + \\epsilon}" />*/}
                    </div>
                </div>
            </div>
        </div>

        <div className="row bg-grey">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Graph graph={graph} options={options} events={events} style={{height: "600px"}}/>
                    </div>
                </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="w3-content w3-container w3-padding-16 w3-left">
                            Structural measures
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin: 0}}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: 0, marginRight: 16}}>

                        <SimpleLineChart/>
                    </div>
                </div>
                <div className="row" style={{margin: 0}}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: 0, marginRight: 16}}>

                        <SimpleLineChart/>

                    </div>
                </div>
                <div className="row" style={{margin: 0}}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: 0, marginRight: 16}}>

                        <SimpleLineChart/>

                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="w3-content w3-container w3-padding-64 w3-center">
                        <h3>PUBLICATION</h3>
                        <PdfIcon/>
                        <p className="w3-center"> Mikołaj Morzy, Tomasz Kajdanowicz, Przemysław Kazienko, Grzegorz
                            Miebs,
                            and Arkadiusz Rusin, <em>Priority Attachment: a Universal Mechanism for Generating
                                Networks</em>, in preparation, 2017</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center bg-grey">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="w3-content w3-container w3-padding-64 w3-center">
                        <h3>ACKNOWLEDGMENTS</h3>
                        <p className="w3-center">
                            This work was supported by the National Science Centre, Poland, Decisions nos.
                            DEC-2016/23/B/ST6/03962, DEC-2016/21/B/ST6/01463, and DEC-2016/21/D/ST6/02948; European
                            Union’s Horizon 2020 Research and Innovation Program under the Marie Skłodowska-Curie Grant
                            Agreement no. 691152 (RENOIR); and the Polish Ministry of Science and Higher Education Fund
                            for supporting internationally cofinanced projects in 2016–2019 (Agreement no.
                            3628/H2020/2016/2).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>;


// React.render(<Graph graph={graph} options={options} events={events} />, document.body);

