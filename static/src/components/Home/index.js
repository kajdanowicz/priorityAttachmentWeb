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
import SimpleBarChart from "./simpleBarChartContainer"
import CustomKSlider from "./customKSliderContainer"
import CustomCircularProgress from "./customCircularProgressContainer";

// React.render(<Graph graph={graph} options={options} events={events} />, document.body);


export const Home = () =>
    <section className="container-fluid" style={{padding: 0, margin: 0}}>
        <div>
            <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div className="w3-display-middle">
                    <span className="w3-center w3-black w3-padding-large w3-xlarge w3-wide w3-animate-opacity">PRIORITY</span>
                    <span className="w3-center w3-white w3-padding-large w3-xlarge w3-wide w3-animate-opacity">ATTACHMENT</span>
                    <span className="w3-padding-large"><br></br></span>
                    <span className="w3-center w3-grey w3-padding-large w3-medium w3-animate-opacity">
                        <PdfIcon/>
                        <a href="https://arxiv.org/abs/1801.03327">arXiv:1801.03327</a>
                    </span>
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
                            <span className="network"></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-mted-3 col-lg-3 text-center">
                    <div className="w3-content w3-container w3-padding-32">
                        <span><h4>Distances</h4></span>
                        <span>each vertex computes its distance to all other vertices
using some distance function</span>

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
                        <span><h4>Rankings</h4></span>
                        <span>distances define local rankings of priority which show
which vertices are "important" from the point of view of a vertex</span>
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
                        <span><h4>Network</h4></span>
                        <span>when a vertex creates edges, it selects target vertices
with the probability proportional to their position in the local ranking</span>
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
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 txt-sm-center">
                <div className="w3-content w3-container w3-padding-16 w3-right">
                    <div className="numberCircle">1</div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3  txt-sm-center">
                <div className="w3-content w3-container w3-padding-16 w3-left">
                    <h3>Network parameters:</h3>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
                <div className="w3-content w3-container w3-center">
                    <CustomSlider/>
                    <CustomKSlider/>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 txt-sm-center ">
                <div className="w3-content w3-container w3-padding-16 w3-right">
                    <div className="numberCircle">2</div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3  txt-sm-center">
                <div className="w3-content w3-container w3-padding-16 w3-left">
                    <h3>Distance:</h3>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 txt-sm-center ">
                <div className="w3-content w3-container w3-left w3-padding-0">
                    <DropDownDistanceMenu/>
                </div>
            </div>
         </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2  txt-sm-center">
                <div className="w3-content w3-container w3-padding-16 w3-right">
                    <div className="numberCircle">3</div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3  txt-sm-center">
                <div className="w3-content w3-container w3-padding-16 w3-left">
                    <h3>Run:</h3>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 txt-sm-center ">
                <div className="w3-content w3-container w3-padding-16 w3-left">
                    <RaisedButton label="Generate graph" primary={true} disabled={true}/> <CustomCircularProgress visible={true}/>
                </div>
            </div>
         </div>
        <div className="row bg-grey text-center media-middle">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                {/*<div className="row text-center ">*/}
                    {/*<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">*/}
                        <CustomGRaph/>
                    {/*</div>*/}
                {/*</div>*/}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="w3-content w3-container w3-padding-16 w3-left text-center">
                            Distribution of structural measures
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin: 0}}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: 0, marginRight: 16}}>
                        Degree
                        <SimpleBarChart dataKey="degree"/>
                    </div>
                </div>
                <div className="row" style={{margin: 0}}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: 0, marginRight: 16}}>
                        Shortes paths lenghts
                        <SimpleBarChart dataKey="paths"/>

                    </div>
                </div>
                <div className="row" style={{margin: 0}}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: 0, marginRight: 16}}>
                        Clustering coefficient
                        <SimpleBarChart dataKey="clustering"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row" id="publication">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="w3-content w3-container w3-padding-64 w3-center">
                        <h3>PUBLICATION</h3>
                        <PdfIcon/>
                        <a href="https://arxiv.org/abs/1801.03327">arXiv:1801.03327</a>
                        <p className="w3-center"> <a href="mailto:Mikolaj.Morzy@put.poznan.pl">Mikołaj Morzy</a>,
                            <a href="mailto:tomasz.kajdanowicz@pwr.edu.pl">Tomasz Kajdanowicz</a>,
                            <a href="mailto:przemyslaw.kazienko@pwr.edu.pl">Przemysław Kazienko</a>,Grzegorz Miebs,
                            and Arkadiusz Rusin, <em>Priority Attachment: a Universal Mechanism for Generating
                                Networks</em>, submitted, 2017</p>
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

