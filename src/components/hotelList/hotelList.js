import './hotelList.scss';
import React from 'react';
import { guestButtons } from '../../constants/index';

class HotelList extends React.Component {

    createStarts = (rating) => {
        const stars = [];
        for(let i = 0; i < rating; i++)
            stars.push(<span key={i} className="hotel-list__star"></span>);
        return stars;
    }

    createHotels = () => {
        return this.props.hotelArray.map((hotel, index) => {
            const stars = this.createStarts(hotel.rating);

            return (
                <div className="row hotel-list__row" key={index}>
                    <div className="col-md-3">
                        <img className="hotel-list__image" src="" />
                    </div>
                    <div className="col-md">
                        {stars}
                        <h3 className="hotel-list__name">{hotel.name}</h3>
                        <p className="hotel-list__location">
                            <i className="hotel-list__location-icon" />
                            {hotel.location}
                        </p>
                    </div>
                    <div className="col-md-3">
                        <span className="hotel-list__price-from">from</span>
                        <p className="hotel-list__price">
                            <span className="hotel-list__price--bold">${hotel.price}</span> / night
                        </p>
                        <span className="hotel-list__price-from">Total: $1200</span>
                        <button className="hotel-list__button" onClick={() => {}}>Show rooms</button>
                    </div>
                </div>
            );
        })
    }

    render() {
        const { searchInputs: {
            activeGuestId,
            location,
            checkIn,
            checkOut
        } } = this.props;
        const guestText = guestButtons.find((obj) => obj.id === activeGuestId) || {};
        const hotels = this.createHotels();

        return (
            <div className="hotel-list">
                <p className="hotel-list__description">
                    *** hotels in {location} on {checkIn} - {checkOut} for {guestText.label}!!
                </p>
                {hotels}
            </div>
        );
    }
}

HotelList.defaultProps = {
    searchInputs: {},
    hotelArray: [
        { name: 'Oriental Hotel', location: 'Pune', price: '350', rating: 4 },
        { name: 'Hyat Hotel', location: 'Mumbai', price: '750', rating: 3 },
        { name: 'Taaj Hotel', location: 'Pune', price: '800', rating: 5 },
    ]
}
export default HotelList;