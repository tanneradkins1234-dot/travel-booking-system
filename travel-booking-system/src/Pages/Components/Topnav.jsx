    import { Link } from 'react-router-dom'

    export function Topnav() {
        return (
        <div className='bottom-border normal-font'>
            <div className='inter-bold' style={{ float: 'left', fontSize: '17px', margin: '19px 21px', color: 'purple'}}>Wayvo</div>
            <div className='topnav'>
                <Link to="/Login" style={{ float: 'right' }}><i className='user icon'></i> Login</Link>
                <Link to="#" style={{ float: 'right' }}>List Your Own Property</Link>
                <Link to="/Home-Car-Rentals" style={{ float: 'right' }}><i className='car icon'></i> Car Rental</Link> 
                <Link to="/Home-Flights" style={{ float: 'right' }}><i className='plane icon'></i> Flights</Link>
                <Link to="/" style={{ float: 'right' }}><i className='home icon'></i> Home</Link>
            </div>
        </div>
        )
    }
