import React, {useState} from 'react';
import "../pages/PageStyle.scss"
import "../styles/global.css"

const LoginPage: React.FC = () => {

    const [flag, setFlag] = useState(true)

    return (

        <section className='authorize'>

            <div className='container active-login'>
                <div className='welcome-section'>
                    <h1 className='welcome'>Welcome!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cumque doloribus
                        ducimus est excepturi explicabo hic incidunt itaque iusto laboriosam nam nisi perferendis
                        quisquam rem sequi voluptas, voluptatem voluptatibus.</p>
                </div>
                <div className='forms-container'>
                    <div className={flag? 'form-container login': 'form-container signup'}>
                        <h2>Login</h2>
                        <form>
                            <input type="email" placeholder='Email' required/>
                            <input type="password" placeholder='Password' required/>
                            <button type='submit'>Login</button>
                        </form>
                        <p>Dont Have Account?
                            <span className='switch-form' onClick={()=>setFlag(!flag)}> Sign Up</span></p>
                    </div>

                    <div className={flag? 'form-container signup': 'form-container login'}>
                        <h2>Sign Up</h2>
                        <form>
                            <input type="text" placeholder='Full Name' required/>
                            <input type="email" placeholder='Email' required/>
                            <input type="password" placeholder='Password' required/>
                            <button type='submit'>Register</button>
                        </form>
                        <p>Already have account?<span className='switch-form' onClick={()=>setFlag(!flag)}>Login</span></p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default LoginPage;