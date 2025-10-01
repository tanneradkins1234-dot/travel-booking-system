import { Link } from 'react-router-dom';
import { Container, TextArea } from 'semantic-ui-react';
import bike  from './bike.WebP'
import newyork from './NewYork1.WebP'
import losangeles from './LosAngeles.WebP'


export function Home() {
    const StayForm = () => (
        <form className='ui placeholder segment ui input'>
            <label className="App inter-unique">FIND A PLACE TO STAY:</label>
            <br/>
            <label for="destination" className='ui label'>Destination </label>
            <input type="text" placeholder="Destination" name="destination"/>
            <br/>
            <label for="checkin" className='ui label'>Check-in date</label>
            <input type="date" placeholder="Check-in" name="checkin"/>
            <br/>
            <label for="checkout" className='ui label'>Check-out date</label>
            <input type="date" placeholder="Check-out" name="checkout"/>
            <br/>
            <label for="people" className='ui label'>People</label>
            <input type="number" placeholder="Amount" name="people"/>
            <br/>
            <button type="submit" className="ui primary button">Search</button>
        </form>
    );

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='column-75'>
                    <h1 className='xlarge-font inter-bold'>Travel Booking!</h1>
                    <h1 className='large-font inter-bold'>How To Do It Properly...<span className='inter-bolditalic' style={{ color: 'purple' }}>With Wayvo</span></h1>
                    <p className='font-24'>Proper travel booking starts with careful planning—identifying your destination, travel dates, and budget before you begin. 
                    From there, compare options on Wayvo to secure the best value for stays, flights, accommodations, and transportation.
                    Always double-check details such as cancellation policies, baggage allowances, and check-in times to avoid surprises later. 
                    It's also wise to read reviews and confirm that the booking provider is trustworthy. Finally, keep all confirmations and receipts  
                    organized, whether digitally or printed, so you can easily access them during your trip. A thoughtful approach not only saves money 
                    but also ensures a smoother,<span className='inter-bolditalic' style={{ color: 'purple' }}> stress-free travel experience.</span></p>
                </div>
                <div classname='column-25'>
                    <img src={bike} width="335" height="471" style={{ marginTop: '64px' }} alt="Bike" />
                </div>
            </div>
        </div>
        <div className='scroll-indicator-container'>
            <a className='scroll-indicator'>
                <span className='display-none'>Scroll</span>    
            </a>    
        </div> 
        <div className='destination-container'>
        <h1 style={{ marginLeft: '84px', paddingTop: '64px' }} className='large-font inter-bold'>Trending Destinations</h1>
        </div>
        </>
    );
}