import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import seedColors from './seedColors';
import MiniPalette from './MiniPalette';


class PaletteList extends Component {
    render() {
        const {palettes} = this.props;
        console.log(seedColors)
        return (
            <div>
                <h1>React Colors</h1>
                {palettes.map(palette => (
                    <MiniPalette {...palette} />
                ))}
            </div>
        );
    }
}

export default PaletteList;