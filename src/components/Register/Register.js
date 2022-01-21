import React from 'react';
import './Register.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Grid, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useAuth from '../../Hooks/useAuth';
import RegistrationNow from '../../shared/RegistrationNow/RegistrationNow';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Register = () => {
    //toggle registration and login form
    const { isLogin, setIsLogin } = useAuth();
    return (
        <>
            <Header />
            <div className='register'>
                <Container>
                    <Grid md={6} sx={{ margin: 'auto' }}>
                        {!isLogin ?
                            <>
                                <form action="">
                                    <h1 className="title titleBar">Please Register..</h1>
                                    <div className="name">
                                        <span className="formIcon">
                                            <PermIdentityIcon />
                                        </span>
                                        <input placeholder='Name' type="text" />
                                    </div>
                                    <div className="email">
                                        <span className="formIcon">
                                            <EmailIcon />
                                        </span>
                                        <input placeholder='Email' type="email" />
                                    </div>
                                    <Grid container columnSpacing={2}>
                                        <Grid item md={6} xs={12}>
                                            <div className="password">
                                                <span className="formIcon">
                                                    <LockIcon />
                                                </span>
                                                <input placeholder='Password' type="email" />
                                            </div>
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <div className="re-password">
                                                <span className="formIcon">
                                                    <VpnKeyIcon />
                                                </span>
                                                <input placeholder='Confirm Password' type="email" />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <button className='primaryBtn registrationBtn'>Register</button>
                                </form>
                                <div className="haveAccount">
                                    <p onClick={() => setIsLogin(true)}>Already have an account.</p>
                                </div>
                            </>
                            :
                            <>
                                <form action="">
                                    <h1 className="title titleBar">Please Login..</h1>
                                    <div className="email">
                                        <span className="formIcon">
                                            <EmailIcon />
                                        </span>
                                        <input placeholder='Email' type="email" />
                                    </div>
                                    <div className="password">
                                        <span className="formIcon">
                                            <LockIcon />
                                        </span>
                                        <input placeholder='Password' type="email" />
                                    </div>
                                    <button className='primaryBtn registrationBtn'>Log In</button>
                                </form>
                                <div className="haveAccount">
                                    <p onClick={() => setIsLogin(false)}>Have no account.</p>
                                </div>
                            </>
                        }
                        <div className="socialIcon">
                            <h3 className="title titleBar">{
                                !isLogin ? 'Registration' : 'Log In'
                            } With...</h3>
                            <div style={{ textAlign: 'center' }} className="icon">
                                <FacebookIcon />
                                <InstagramIcon />
                                <TwitterIcon />
                                <LinkedInIcon />
                            </div>
                        </div>
                    </Grid>
                </Container>
                <RegistrationNow />
            </div >
            <Footer />
        </>

    );
};

export default Register;