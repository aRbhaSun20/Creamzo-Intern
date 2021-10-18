import { Button, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './style/style.css';
import Modal from '@material-ui/core/Modal';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Appbar from './Appbar.jsx';
import { LoginContext } from '../../Context/Login';
// import logo from './assets/Creamzo_logo.jpeg';
import logo from './assets/Creamzotransperant.png';
import ForgetPassword from '../Login/ForgotPassword';
import ResetPassword from '../Login/ResetPassword';

const NavBar = () => {
  const [LoginOpen, setLoginOpen] = React.useState(false);
  const [SignUpOpen, setSignUpOpen] = React.useState(false);
  const [Toggle, setToggle] = React.useState(false);
  // eslint-disable-next-line
  const [login, setLogin] = useContext(LoginContext);

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignClose = () => {
    setSignUpOpen(false);
  };

  const handleForgetClose = () => {
    setForgetOpen(false);
  };

  const handleResetClose = () => {
    setResetOpen(false);
  };

  const handleToggleButton = () => {
    console.log(Toggle);
    if (Toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const [ForgetOpen, setForgetOpen] = React.useState(false);
  const [ResetOpen, setResetOpen] = React.useState(false);

  return (
    <React.Fragment>
      <div
        className="navbar"
        style={{ paddingTop: '5px', marginBotton: '34px' }}
      >
        <NavLink activeClassName="activeLink" to="/" exact>
          <Typography
            variant="h4"
            style={{ fontWeight: 'bold', fontSize: '15px' }}
          >
            <img
              src={logo}
              className="logo"
              alt="logo"
              style={{ height: '55px', marginTop: '5px' }}
            />
          </Typography>
        </NavLink>

        <div className="remaining-navs">
          <div className="Three">
            <NavLink
              activeClassName="activeLink"
              to="/about"
              className="navs"
              exact
            >
              <Typography>About</Typography>
            </NavLink>
            <NavLink
              className="navs"
              activeClassName="activeLink"
              to="/blog"
              exact
            >
              <Typography>Blog</Typography>
            </NavLink>

            <NavLink
              className="navs"
              activeClassName="activeLink"
              to="/discover"
              exact
            >
              <Typography>Discover</Typography>
            </NavLink>
          </div>
          <Button
            className="navbutton"
            variant="contained"
            style={{
              borderRadius: '1.5rem',
              textTransform: 'capitalize',
              marginRight: '10px',
              boxShadow: 'none',
            }}
            onClick={() => {
              setSignUpOpen(true);
            }}
          >
            Sign Up
          </Button>
          <Button
            className="navbutton"
            variant="contained"
            color="secondary"
            style={{
              borderRadius: '1.5rem',
              textTransform: 'capitalize',
              boxShadow: 'none',
            }}
            onClick={() => {
              setLoginOpen(true);
            }}
          >
            Log In
          </Button>

          <Modal
            open={LoginOpen}
            onClose={handleLoginClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{ display: 'flex', margin: 'auto' }}
          >
            <Login
              setopen={setLoginOpen}
              setSignopen={setSignUpOpen}
              setForget={setForgetOpen}
              setReset={setResetOpen}
            />
          </Modal>

          <Modal
            open={SignUpOpen}
            onClose={handleSignClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{ display: 'flex', margin: 'auto' }}
          >
            <SignUp setopen={setSignUpOpen} setLoginOpen={setLoginOpen} />
          </Modal>

          <Modal
            open={ForgetOpen}
            onClose={handleForgetClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{ display: 'flex', margin: 'auto' }}
          >
            <ForgetPassword
              setopen={setForgetOpen}
              setLoginOpen={setLoginOpen}
            />
          </Modal>

          <Modal
            open={ResetOpen}
            onClose={handleResetClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{ display: 'flex', margin: 'auto' }}
          >
            <ResetPassword setopen={setResetOpen} setLoginOpen={setLoginOpen} />
          </Modal>

          <div className="togglebutton">
            <span onClick={handleToggleButton}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <Appbar status={Toggle} />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
