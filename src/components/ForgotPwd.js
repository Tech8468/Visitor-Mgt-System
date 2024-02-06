import PwdIcon from './images/pwd.png'

function ForgotPwd(){
    return (
        <div className="home">
            <form>
                <div>
                    <img src={PwdIcon} alt='' />
                </div>
                    <h1>Welcome back!</h1>
                    <div>
                        <label>Email</label>
                        <input type='text' placeholder='Enter your email' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password' />
                    </div>
                    <button type='submit'>Sign in</button>
                </form>
        </div>
    )
}

export default ForgotPwd;