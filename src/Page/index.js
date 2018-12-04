import React from 'react';
import './page.css';

export default class Page extends React.PureComponent {

    constructor() {
        super(...arguments)
    }

    render() {
        return(
            <div className='l-page'>
                <div className="page-inner">
                    <header className="page-header">
                        <div className="page-header-inner">
                        </div>
                    </header>
                    <main className="page-main">
                        <div className="page-section">
                            <div className="page-section-inner">
                            </div>
                        </div>
                    </main>
                    <footer className="page-footer">
                        <div className="page-footer-inner">
                            <small className='page-footer-text'>
                                Pincamp project, made with love by Debbie Derks 2018
                            </small>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}
