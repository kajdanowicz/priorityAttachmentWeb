import React from 'react';
import Graph from 'react-graph-vis';
import './styles.scss';
import DropDownDistanceMenu from "./dropDownDistanceMenu";
import SimpleLineChart from "./simpleLineChart";
import CustomSlider from "./customSlider";
import {RaisedButton} from "material-ui";
import ReactHeatmap from 'react-heatmap';
import CustomDistanceTable from "./customDistanceTable";

var graph = {
  nodes: [
    {id:  1, label: ''},
    {id:  2, label: ''},
    {id:  3, label: ''},
    {id:  4, label: ''},
    {id:  5, label: ''},
    {id:  6, label: ''},
    {id:  7, label: ''},
    {id:  8, label: ''},
    {id:  9, label: ''},
    {id:  10, label: ''},
    {id:  11, label: ''},
    {id:  12, label: ''},
    {id:  13, label: ''},
    {id:  14, label: ''},
    {id:  15, label: ''},
    {id:  16, label: ''},
    {id:  17, label: ''},
    {id:  18, label: ''},
    {id:  19, label: ''},
    {id:  20, label: ''},
    {id:  21, label: ''},
    {id:  22, label: ''},
    {id:  23, label: ''},
    {id:  24, label: ''},
    {id:  25, label: ''},
    {id:  26, label: ''},
    {id:  27, label: ''},
    {id:  28, label: ''},
    {id:  29, label: ''},
    {id:  30, label: ''},
    {id:  31, label: ''},
    {id:  32, label: ''},
    {id:  33, label: ''},
    {id:  34, label: ''}
    ],
  edges: [
    {from:2,to:1},
    {from:3,to:1},
    {from:3,to:2},
    {from:4,to:1},
    {from:4,to:2},
    {from:4,to:3},
    {from:5,to:1},
    {from:6,to:1},
    {from:7,to:1},
    {from:7,to:5},
    {from:7,to:6},
    {from:8,to:1},
    {from:8,to:2},
    {from:8,to:3},
    {from:8,to:4},
    {from:9,to:1},
    {from:9,to:3},
    {from:10,to:3},
    {from:11,to:1},
    {from:11,to:5},
    {from:11,to:6},
    {from:12,to:1},
    {from:13,to:1},
    {from:13,to:4},
    {from:14,to:1},
    {from:14,to:2},
    {from:14,to:3},
    {from:14,to:4},
    {from:17,to:6},
    {from:17,to:7},
    {from:18,to:1},
    {from:18,to:2},
    {from:20,to:1},
    {from:20,to:2},
    {from:22,to:1},
    {from:22,to:2},
    {from:26,to:24},
    {from:26,to:25},
    {from:28,to:3},
    {from:28,to:24},
    {from:28,to:25},
    {from:29,to:3},
    {from:30,to:24},
    {from:30,to:27},
    {from:31,to:2},
    {from:31,to:9},
    {from:32,to:1},
    {from:32,to:25},
    {from:32,to:26},
    {from:32,to:29},
    {from:33,to:3},
    {from:33,to:9},
    {from:33,to:15},
    {from:33,to:16},
    {from:33,to:19},
    {from:33,to:21},
    {from:33,to:23},
    {from:33,to:24},
    {from:33,to:30},
    {from:33,to:31},
    {from:33,to:32},
    {from:34,to:9},
    {from:34,to:10},
    {from:34,to:14},
    {from:34,to:15},
    {from:34,to:16},
    {from:34,to:19},
    {from:34,to:20},
    {from:34,to:21},
    {from:34,to:23},
    {from:34,to:24},
    {from:34,to:27},
    {from:34,to:28},
    {from:34,to:29},
    {from:34,to:30},
    {from:34,to:31},
    {from:34,to:32},
    {from:34,to:33}
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
    select: function(event) {
        var { nodes, edges } = event;
    }
};

export const Home = () =>
    <section className="container-fluid">
        {/*<div className="row" >*/}
            {/*<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">*/}
                {/*<div id="myCarousel" className="carousel" data-ride="carousel">*/}
                    {/*<ol className="carousel-indicators">*/}
                        {/*<li data-target="#myCarousel" data-slide-to="0" className="active"></li>*/}
                        {/*<li data-target="#myCarousel" data-slide-to="1"></li>*/}
                        {/*<li data-target="#myCarousel" data-slide-to="2"></li>*/}
                    {/*</ol>*/}
                    {/*<div className="carousel-inner">*/}
                        {/*<div className="item active">*/}
                            {/*<img src="http://c1.staticflickr.com/4/3772/12148252824_8b259b76fb_h.jpg" alt="Los Angeles"/>*/}
                        {/*</div>*/}

                        {/*<div className="item">*/}
                          {/*<img src="http://c1.staticflickr.com/4/3677/11225442313_3e3399f234_b.jpg" alt="Chicago"/>*/}
                        {/*</div>*/}

                        {/*<div className="item">*/}
                          {/*<img src="http://c1.staticflickr.com/7/6212/6223212683_dd78050abb_b.jpg" alt="New Y ork"/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<a className="left carousel-control" href="#myCarousel" data-slide="prev">*/}
                        {/*<span className="glyphicon glyphicon-chevron-left"></span>*/}
                        {/*<span className="sr-only">Previous</span>*/}
                    {/*</a>*/}
                    {/*<a className="right carousel-control" href="#myCarousel" data-slide="next">*/}
                        {/*<span className="glyphicon glyphicon-chevron-right"></span>*/}
                        {/*<span className="sr-only">Next</span>*/}
                    {/*</a>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}
        <div id="what" className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    <h1>What is it for?</h1>
                </div>
            </div>
        </div>
        <div id="how" className="container-fluid bg-grey">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    <h1>How it works?</h1>
                    <span className="glyphicon glyphicon-globe logo slideanim"></span>
                </div>
            </div>
        </div>
        <div id="demo" className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    <h1>Live demo</h1>
                </div>
            </div>
        </div>
        <div id="params" className="container-fluid bg-grey">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h4>Select parameters</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <h3>1</h3>
                        </div>
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            Network size:
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <CustomSlider/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <h3>2</h3>
                        </div>
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            Distance:
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <DropDownDistanceMenu/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <h3>3</h3>
                        </div>
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            Run:
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <RaisedButton label="Generate graph" primary={true}/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h4>Preview distances</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ReactHeatmap max={1} data={
                                [{ x: 10, y: 15, value: 1},
                                    { x: 50, y: 50, value: 1},
                                { x: 50, y: 50, value: 1},
                                { x: 60, y: 40, value: 1},
                                { x: 70, y: 30, value: 1},
                                { x: 80, y: 20, value: 1}
                                ]
                            } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h4>Network preview</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                       <Graph graph={graph} options={options} events={events} style={{ height: "600px"}} />
                    </div>
                </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h4>Structural measures</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <SimpleLineChart/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <SimpleLineChart/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <SimpleLineChart/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>Publication</h1>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>Project</h1>
                </div>
            </div>
        </div>
    </section>;



// var Graph = require('react-graph-vis');



// React.render(<Graph graph={graph} options={options} events={events} />, document.body);

