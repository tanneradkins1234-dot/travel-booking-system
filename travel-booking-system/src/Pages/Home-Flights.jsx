import { Link } from 'react-router-dom'

export function Flights() {
    const FlightForm = () => (
        <form className='ui placeholder segment ui input'>
            
            <label className="App inter-normal">FIND A FLIGHT:</label>
            <br/>
            <label for="starting" className='ui label'>leaving from: </label>
            <input type="text" placeholder="Location" name="starting"/>'
            <br/>
            <label for="destination" className='ui label'>Going to:</label>
            <input type="text" placeholder="Location" name="destination"/>
            <br/>
            <label for="startD" className='ui label'>Start date: </label>
            <input type="date" placeholder="Check-in" name="startD"/>
            <br/>
            <label for="endD" className='ui label'>End date: </label>
            <input type="date" placeholder="Check-out" name="endD"/>
            <br/>
            <label for="people" className='ui label'>People: </label>
            <input type="number" placeholder="Amount" name="people"/>
            <br/>
            <button type="submit" className='ui primary button'>Search</button>
        
        </form>
    );

    
    return (
        <div>
            <FlightForm/>
        </div>
    );
} 