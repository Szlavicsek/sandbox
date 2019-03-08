import React, { Component } from 'react';
import styles from './slowmo.bluered.scss';

class Bluered extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {

    }

    render() {
        return (
            <div ref="particles" id={styles.slowmo}>
                <canvas className={styles.bluered}></canvas>
            </div>
        );
    }
};

export default Bluered;
