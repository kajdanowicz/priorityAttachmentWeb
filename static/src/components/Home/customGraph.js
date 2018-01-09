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
            solver: 'forceAtlas2Based',
            // solver: 'hierarchicalRepulsion',
            stabilization: {
                iterations: 100
            }
        },
        layout: {
            hierarchical: false,
            improvedLayout: false
        },
        edges: {
            color: "#777777",
            shadow: false,
            smooth: false
        },
        nodes: {
            shadow: true,
            labelHighlightBold: true,
            color: {
                border: "#777777",
                background: "#00BCD4",
                highlight: "333333"
            },

        },
        autoResize: true

    };


export default class CustomGraph extends Component {


    render() {
        if (Object.keys(this.props.network).length === 0) {
            return (<span></span>);
        } else {
            return (
                <div>
                    <Graph graph={this.props.network} options={options} events={events} style={{height: "710px"}}/>
                </div>
            );
        }
    }
}

CustomGraph.propTypes = {
    network: React.PropTypes.object.isRequired,
};
