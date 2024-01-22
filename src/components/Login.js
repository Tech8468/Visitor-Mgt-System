function Register(){
    return (
        <div className="height">
            <div className="login">
                <form className="form">
                    <div>
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div>
                        <input type="text" placeholder="Pasword" />
                    </div>
                    <button type="submit">LOG-IN</button>
                </form>
            </div>
            <div>
                <Link to="/register">Register to Sign-up</Link>
            </div>
        </div>
    )
}

export default Register;