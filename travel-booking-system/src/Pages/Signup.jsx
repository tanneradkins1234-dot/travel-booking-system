import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

export function Signup() {
    const SignupForm = () => (
            <div className='ui placeholder segment ui input' id='signup'  style={{ margin: '100px', marginLeft: '600px', marginRight: '600px' }}>
                <label className='App inter-unique'>SIGN-UP</label>
                <br/>
                <input type="text" placeholder="Enter Email" name="email" required/>
                <br/>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <br/>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                <br/>
                <p className='App inter-unique'>By creating an account you agree to our <Link to="/TermsService">Terms & Privacy</Link>.</p>
                <br/>
                <button type="submit" className="ui primary button">Sign Up</button>
                
            </div>  
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