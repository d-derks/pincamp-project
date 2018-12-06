import React from 'react';
import './converter.css';
import { Datareceiver } from '../Dataconnector';

export default function Converter() {

    return(
        <div className="b-converter">
            <div className="converter-field">
                <label
                    htmlFor="convertNumber"
                    className="converter-label"
                >
                    Convert integer into Roman numbers
                </label>
                <Datareceiver.Consumer>
                    {
                        ({ inputValue, updateInputValue, convertIntegerIntoRomanNumber, handleChangeInput }) => (
                            <>
                                <div className="converter-input">
                                    <input
                                        className="converter-input-inner"
                                        type="number"
                                        id='convertNumber'
                                        value={ inputValue }
                                        onChange={ handleChangeInput }
                                        placeholder='Enter an integer number'
                                        maxlength="4"
                                    />
                                </div>
                                <button
                                    className="converter-btn"
                                    type='button'
                                    value='convert number'
                                    onClick={ convertIntegerIntoRomanNumber }
                                >
                                    <span className="converter-btn-text">
                                        Convert
                                    </span>
                                </button>
                            </>
                        )
                    }
                    </Datareceiver.Consumer>
            </div>
        </div>
    )
}
