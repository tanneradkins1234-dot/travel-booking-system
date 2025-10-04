import { Link } from 'react-router-dom';
import { Container, TextArea } from 'semantic-ui-react';
import bike  from './bike.WebP';
import newyork from './NewYork1.WebP';
import losangeles from './LosAngeles.WebP';
import sanfrancisco from './SanFrancisco.WebP';
import washingtondc from './WashingtonDC.WebP';
import miami from './Miami.WebP';
import orlando from './Orlando.WebP';
import nashville from './Nashville.WebP';
import lasvegas from './LasVegas.WebP';
import chicago from './Chicago.WebP';
import neworleans from './NewOrleans.WebP'

export function Home() {
    const StaySearch = () => (
        <div className='ui placeholder'>
            <input type='text' />

        </div>
    )

    const ImageGrid = () => (
        <div className='gradient1'>
        <div className="row">
            <div className="column">
                <a href='#' className='container'>
                    <div className='font-24' >Chicago</div>
                    <img src={chicago} alt='Chicago'/>
                </a>
                <a className='container'>
                    <img src={newyork} alt='NewYork'/>
                    <h2 className='bottom-left' >New York</h2>
                </a>
                <a className='container'>
                    <img src={miami} alt='Miami'/>
                    <h2 className='bottom-left' >Miami</h2>
                </a>
                <a className='container'>
                    <img src={lasvegas} alt='LasVegas'/>
                    <h2 className='bottom-left'>Las Vegas</h2>
                </a>
                <a className='container'>
                    <img src={nashville} alt='Nashville'/>
                    <h2 className='bottom-left'>Nashville</h2>
                </a>
            </div>
            <div className="column">
                <a className='container'>
                    <img src={losangeles} alt='LosAngeles'/>
                    <h2 className='bottom-left'>Los Angeles </h2>
                </a>
                <a className='container'>
                    <img src={sanfrancisco} alt='SanFrancisco'/>
                    <h2 className='bottom-left'>San Franscisco</h2>
                </a>
                <a className='container'>
                    <img src={orlando} alt='Orlando'/>
                    <h2 className='bottom-left'>Orlando</h2>
                </a>
                <a className='container'>
                    <img src={washingtondc} alt='WashingtonDC'/>
                    <h2 className='bottom-left' >Washington DC</h2>
                </a>
                <a className='container'>
                    <img src={neworleans} alt='NewOrleans'/>
                    <h2 className='bottom-left'>New Orleans</h2>
                </a>
            </div>
        </div>
        </div>
    )

    return (
        <>
        <div className='container-1'>
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
        <ImageGrid/>
        </div>
        </>
    );
}