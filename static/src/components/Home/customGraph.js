import React, {Component} from 'react';
import Graph from 'react-graph-vis';


const events = {
        select: function (event) {
            var {nodes, edges} = event;
        }
    };

const options = {
        physics: {
            enabled: true,
            solver: 'hierarchicalRepulsion',
            stabilization: {
                iterations: 100
            }
        },
        layout: {
            hierarchical: false,
            improvedLayout: false
        },
        edges: {
            color: "#000000",
            shadow: false,
            smooth: false
        },
        nodes: {
            shadow: true,
            labelHighlightBold: true
        },
        autoResize: true

    };


export default class CustomGRaph extends Component {


    render() {
        if (Object.keys(this.props.network).length === 0) {
            return (<span></span>);
        } else {
            return (
                <div>
                    <Graph graph={this.props.network} options={options} events={events} style={{height: "600px"}}/>
                </div>
            );
        }
    }
}

CustomGRaph.propTypes = {
    network: React.PropTypes.object.isRequired,
};
