import  { Link } from 'react-router-dom'

export function CarRentals() {
    const CarRentalForm = () => (
        <form className='ui placeholder segment ui input'>
            
            <label className='App inter-normal'>FIND A CAR RENTAL:</label>
            <br/>
            <label for="pickup" className='ui label'>Pick-up Location: </label>
            <input type="text" placeholder="Pick-up" name="pickup" required/>
            <br/>
            <label for="dropoff" className='ui label'>Drop-off Location: (optional)</label>
            <input type="text" placeholder="Drop-off" name="dropoff"/>
            <br/>
            <label for="pickuptime" className='ui label'>Pick-up Date and Time: </label>
            <input type="datetime-local" placeholder="Date and Time" name="pickuptime"/>
            <br/>
            <label for="dropofftime" className='ui label'>Drop-off Date and Time: </label> 
            <input type="datetime-local" placeholder="Date and Time" name="dropofftime"/>
            <br/>
            <button type="submit" className='ui primary button'>Search</button>
        
        </form>
    );

    return (
        <div >
            <CarRentalForm/>
        </div>
    );
}  