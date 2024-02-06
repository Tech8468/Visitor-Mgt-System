import React from 'react';
// import pix1 from "./images/sushi4.png";
// import pix2 from "./images/jollof.png";
// import pix3 from "./images/chicken2.png";
// import pix4 from "./images/burger.png";
import {Link} from "react-router-dom";

function Home() {
    return (
        // <div className="homeBanner height">
        //     <h1>
        //         J'Bot
        //     </h1>
        //     <p> ...best place to shop online...</p>



        //     <Link to="/product"><button className='menuBtn'>Enter to Shop</button></Link>
        // </div>

        <div className='home'>
            <div className='col1'>

                <form>
                    <h1>Welcome back!</h1>
                    <div>
                        <label>Email</label>
                        <input type='text' placeholder='Enter your email' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password' />
                    </div>
                    <div>
                        <div className='box'>
                            <div>
                                <input type='checkbox' className='checkbox' />
                                <label>Remember me</label>
                            </div>

                            <Link to='/forgotpwd'><p>Forgot password</p></Link>
                        </div>
                    </div>
                    <button type='submit'>Sign in</button>
                </form>
            </div>
            <div className='col2'>
                <div>
                <h1>SBSC</h1>
                <h1>VISITOR MANAGEMENT SYSTEM</h1>
                </div>
            </div>
        </div>
    )
}
export default Home;