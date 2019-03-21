import React, { Component } from 'react';
import styles from './slowmo.module.scss';

class Slowmo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {

    }

    render() {
        return (
            <div ref="particles" id={styles.slowmo}>

            </div>
        );
    }
};

export default Slowmo;
