import React from 'react';
import PropTypes from 'prop-types';

export const Datareceiver = React.createContext();

export class Dataconnector extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            inputValue: 0,
            romanNumeral:''
        };

        this.convertIntegerIntoRomanNumber = this.convertIntegerIntoRomanNumber.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput(e) {
        this.setState({ inputValue: e.target.value });
    }


    convertIntegerIntoRomanNumber() {
        let value = this.state.inputValue;
        let result = '';
        const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

        for (let i = 0; i <= decimal.length; i++) {
            while (value % decimal[i] < value) {
                result += roman[i];
                value -= decimal[i];
            }
        }

        this.setState({
            romanNumeral: this.state.romanNumeral = result,
            inputValue: this.state.inputValue = 0,
        });
    }

    render() {
        return (
            <Datareceiver.Provider value={{
                state: this.state,
                convertIntegerIntoRomanNumber: this.convertIntegerIntoRomanNumber,
                handleChangeInput: this.handleChangeInput,
            }}>
                {this.props.children}
            </Datareceiver.Provider>
        );
    }
}

Dataconnector.propTypes = {
    children: PropTypes.any,
};
