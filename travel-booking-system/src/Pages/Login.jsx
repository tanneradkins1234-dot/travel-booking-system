import { Link } from 'react-router-dom';

export function Login() {
    const LoginForm = () => (
            <form className='ui placeholder segment ui form' id='login' style={{ margin: '100px', marginLeft: '600px', marginRight: '600px' }}>
                <label className='App inter-normal'>LOGIN</label>
                <br/>
                <div className='inline field'>
                <label>Username: </label>                
                <input type="text" placeholder="Enter Username" name="username" required/>
                </div>
                <br/>
                <div className='inline field'>
                <label>Password: </label>
                <input type="password" placeholder="Enter Password" name="password" required/>
                </div>
                <br/>
                <button type="submit" className='ui primary button'>Login</button>
                <br/>
                <Link to="/Signup" className='App'>Dont have an account? Click Here</Link>
            </form>  
        );

    return (
        <>
        <div>
            <Link to="/">
                <button className='ui button' style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>Back to Home</button>
            </Link>
        </div>
            <LoginForm/>
        </>
    );
}                   