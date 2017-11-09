import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

const tilesData = [
    {value: 1},
    {value: 2},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 0},
    {value: 5},
    {value: 76},
    {value: 3},
    {value: 43},
    {value: 24},
    {value: 26},
    {value: 26},
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

export default class CustomDistanceMatrix extends React.Component {
    render() {
        return (
            <div style={styles.root}>
                <GridList cols={20} cellHeight={20} style={styles.gridList}>
                    {tilesData.map((tile) => (<GridTile> {tile.value}</GridTile>))}
                </GridList>
            </div>
        )
    }
};

