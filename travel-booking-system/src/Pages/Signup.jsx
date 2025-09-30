import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

export function Signup() {
    const SignupForm = () => (
            <form className='ui placeholder segment ui form' id='signup'  style={{ margin: '100px', marginLeft: '600px', marginRight: '600px' }}>
                <label className='App inter-unique'>SIGN-UP</label>
                <br/>
                <div className='inline field'>
                <label>Email: </label>
                <input type="text" placeholder="Enter Email" name="email" required/>
                </div>
                <br/>
                <div className='inline field'>
                <label>Password: </label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                </div>
                <br/>
                <div className='inline field'>
                <label>Confirm Password: </label>
                <input type="password" placeholder='Repeat Password' name="psw-repeat" required/>
                </div>
                <br/>
                <p className='App inter-unique'>By creating an account you agree to our <Link to="/TermsService">Terms & Privacy</Link>.</p>
                <br/>
                <button type="submit" className="ui primary button">Sign Up</button>
                
            </form>  
        );
 
    return (
        <>
        <div>
            <Link to="/Login">
                <button className='ui button'style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>Back to Login</button>
            </Link>
        </div>
            <SignupForm/>
        </>
    );
}