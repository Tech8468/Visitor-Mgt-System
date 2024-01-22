function Register(){
    return (
        <div className="height">
            <div className="login">
                <form className="form">
                    <div>
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <input type="text" placeholder="Phone Number" />
                    </div>
                    <div>
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div>
                        <input type="text" placeholder="Pasword" />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Register;