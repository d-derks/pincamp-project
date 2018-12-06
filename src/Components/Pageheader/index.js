import React from 'react';
import './pageheader.css';
import Brand from '../../Components/Brand';
import { Datareceiver } from '../Dataconnector';

export default function Pageheader() {
    return(
        <header className='b-pageheader'>
            <div className="pageheader-inner">
                <div className="pageheader-brand">
                    <Brand />
                </div>
                <Datareceiver.Consumer>
                    {
                        ( context ) => {
                            console.log(context);
                            return (
                                <>
                                    {
                                        context.state.romanNumeral ?
                                            (
                                                <p className='pageheader-text'>
                                                    {
                                                        context.state.romanNumeral
                                                    }
                                                </p>
                                            )
                                            :
                                            (

                                                <h1 className='pageheader-title'>
                                                    Convert integer into Roman numerals
                                                </h1>


                                            )
                                    }
                                </>
                            );
                        }
                    }
                </Datareceiver.Consumer>
            </div>
        </header>
    )
}
