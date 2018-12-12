import React, { Component } from 'react';

import 'github-markdown-css';

import './index.less';

export default class PageDocs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-docs">

                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: require('./html-content') }} />

            </div>
        );
    }
}
