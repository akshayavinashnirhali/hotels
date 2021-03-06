import './home.scss';
import React from 'react';
import { connect } from 'react-redux'
import history from '../../utilities/history';
import ButtonGroup from '../../components/buttonGroup/buttonGroup';
import InputField from '../../components/inputField/inputField';
import homeActions from '../../actions/home';
import { guestButtons } from '../../constants/index';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGuestId: '',
            location: '',
            checkIn: '',
            checkOut: '',
            isDirty: false
        }
    }

    handleButtonClick = (activeGuestId) => {
        this.setState({ activeGuestId });
    }

    handleInputsChange = (key, value) => {
        this.setState({ [key]: value });
    }

    handleFinalButtonClick = () => {
        const { location, checkIn, checkOut, activeGuestId } = this.state;
        this.setState({ isDirty: true });
        if (!!location && !!checkIn && !!checkOut && !!activeGuestId) {
            this.props.updateSearchInputs(this.state);
            history.push('/result');
        }
    }

    render() {
        const { location, checkIn, checkOut, activeGuestId, isDirty } = this.state;

        return (
            <div className="container-fluid home">
                <div className="row home__row">
                    <div className="col-md-8">
                        <InputField
                            type="text"
                            modifier="location"
                            fieldName="location"
                            label="Where are you going?"
                            placeholder="Enter location"
                            error={isDirty && !location}
                            errorMessage="Please enter location to search hotels"
                            value={location}
                            handleChange={this.handleInputsChange}
                        />
                    </div>
                </div>
                <div className="row home__row">
                    <div className="col-md-3">
                        <InputField
                            type="date"
                            modifier="calender"
                            fieldName="checkIn"
                            label="Check-in"
                            error={isDirty && !checkIn}
                            errorMessage="Please enter check-in date"
                            value={checkIn}
                            handleChange={this.handleInputsChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <InputField
                            type="date"
                            modifier="calender"
                            fieldName="checkOut"
                            label="Check-out"
                            error={isDirty && !checkOut}
                            errorMessage="Please enter check-out date"
                            value={checkOut}
                            handleChange={this.handleInputsChange}
                        />
                    </div>
                    <div className="col-md-5">
                        <span className="home__label">Guests</span>
                        <ButtonGroup
                            error={isDirty && !activeGuestId}
                            errorMessage="Please select guest numbers"
                            activeId={activeGuestId}
                            buttons={guestButtons}
                            handleButtonClick={this.handleButtonClick}
                        />
                    </div>
                </div>
                <div className="row home__buttons-wrapper">
                    <div className="col-md">
                        <button className="home__final-button" onClick={this.handleFinalButtonClick}>
                            Search for Hotels
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(() => ({}), {
    updateSearchInputs: homeActions.updateSearchInputs
})(Home);