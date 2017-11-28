import React, {Component} from 'react';
import {Tex} from 'react-tex'


const expressions = {
        random: "N(\\mu,\\sigma)",
        degree: "\\frac{1}{C_D(v_j)+\\epsilon}",
        betweenness: "\\frac{1}{C_B(v_j)+\\epsilon}",
        closeness: "\\frac{1}{C_C(v_j) + \\epsilon}",
        page_rank: "\\frac{1}{C_P(v_j) + \\epsilon}",
        euclidean_1: "\\left| a^1_i - a^1_j \\right|",
        euclidean_2: "\\sqrt{(a^1_i - a^1_j)^2+ (a^2_i - a^2_j)^2}",
        cosine: "1 - \\frac{v_i\\circ v_j}{\\|v_i\\| \\cdot \\| v_j \\|}",
        aggregate: "\\sum\\limits_{k=1}^m w_k D(a^k_i,a^k_j)",
    };

const texts={

}


export default class DistanceDescription extends Component {


    render() {
        return (
            <div>
                <span><Tex texContent={expressions[this.props.state]}/></span>
            </div>
        );
    }
}

DistanceDescription.propTypes = {
    state: React.PropTypes.string,
};
