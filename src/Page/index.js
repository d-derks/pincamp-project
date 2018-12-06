import React from 'react';
import './page.css';
import Pageheader from '../Components/Pageheader';
import Converter from '../Components/Converter';
import { Dataconnector } from '../Components/Dataconnector';

export default function Page() {

    return(
        <Dataconnector>
            <div className='l-page'>
                <div className="page-inner">
                    <Pageheader />
                    <main className="page-main">
                        <div className="page-section">
                            <div className="page-section-inner">
                                <Converter />
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
        </Dataconnector>
    )
}
