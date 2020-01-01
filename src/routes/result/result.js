import './result.scss';
import React from 'react';
import { connect } from 'react-redux'
import ButtonGroup from '../../components/buttonGroup/buttonGroup';
import InputField from '../../components/inputField/inputField';
import { guestButtons } from '../../constants/index';
import HotelList from '../../components/hotelList/hotelList';
import resultActions from '../../actions/result';

class Result extends React.Component {
    constructor(props) {
        super(props);
        const { location, checkIn, checkOut, activeGuestId } = props.homeData;
        this.state = {
            activeGuestId,
            location,
            checkIn,
            checkOut
        }
    }

    componentDidMount() {
        this.props.getHotelResults();
    }

    handleInputsChange = (key, value) => {
        this.setState({ [key]: value });
    }

    render() {
        const { location, checkIn, checkOut, activeGuestId } = this.state;

        return (
            <div className="container-fluid result">
                <div className="row">
                    <div className="col-md-3">
                        <InputField
                            type="text"
                            modifier="location"
                            fieldName="location"
                            label="Where are you going?"
                            value={location}
                            handleChange={this.handleInputsChange}
                        />
                    </div>
                    <div className="col-md-2">
                        <InputField
                            type="date"
                            customClass="result__date"
                            modifier="calender"
                            fieldName="checkIn"
                            label="Check-in"
                            value={checkIn}
                            handleChange={this.handleInputsChange}
                        />
                    </div>
                    <div className="col-md-2">
                        <InputField
                            type="date"
                            customClass="result__date"
                            modifier="calender"
                            fieldName="checkOut"
                            label="Check-out"
                            value={checkOut}
                            handleChange={this.handleInputsChange}
                        />
                    </div>
                    <div className="col-md">
                        <span className="result__label">Guests</span>
                        <ButtonGroup
                            activeId={activeGuestId}
                            buttons={guestButtons}
                            handleButtonClick={this.handleButtonClick}
                        />
                    </div>
                    <div className="col-md-2 result__button-wrapper">
                        <button className="result__final-button" onClick={() => {}}>
                            Search for Hotels
                        </button>
                    </div>
                </div>
                <HotelList
                    searchInputs={this.state}
                />
            </div>
        );
    }
}

export default connect((state) => ({
    homeData: state.home
}), {
    getHotelResults: resultActions.getHotelResults
})(Result);