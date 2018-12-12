import React, { Component } from 'react';

import './index.less';

export default class PageDocs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-docs text-content">

                <div className="html-content" dangerouslySetInnerHTML={{ __html: require('./html-content') }} />

            </div>
        );
    }
}
