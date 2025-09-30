import { Link } from 'react-router-dom';

export function Login() {
    const LoginForm = () => (
            <div className='ui placeholder segment ui input' id='login' style={{ margin: '100px', marginLeft: '800px', marginRight: '800px' }}>
                <label className='App inter-normal'>LOGIN</label>
                <br/>
                <input type="text" placeholder="Enter Username" name="username" required/>
                <br/>
                <input type="password" placeholder="Enter Password" name="password" required/>
                <br/>
                <button type="submit" className='ui primary button'>Login</button>
                <br/>
                <Link to="/Signup" className='App'>Dont have an account? Click Here</Link>
            </div>  
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