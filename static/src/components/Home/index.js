import React from 'react';
import Graph from 'react-graph-vis';
import './styles.scss';
import DropDownDistanceMenu from "./dropDownDistanceMenuContainer";
import SimpleLineChart from "./simpleLineChart";
import CustomSlider from "./customSliderContainer";
import RaisedButton from './RaisedButtonContainer';
import PdfIcon from 'react-icons/lib/fa/file-pdf-o'
import DistanceDescription from './distanceDescriptionContainer'
import CustomGRaph from "./customGraphContainer";
import SimpleBarChart from "./simpleBarChartComponent"

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
                        <DistanceDescription/>
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
                        {/*<Graph graph={graph} options={options} events={events} style={{height: "600px"}}/>*/}
                        <CustomGRaph/>
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
                        <SimpleBarChart/>
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

