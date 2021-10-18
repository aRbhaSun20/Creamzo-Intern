import {
  Avatar,
  InputAdornment,
  Typography,
  MenuItem,
  Popper,
  TextField,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style/style.css';
import { LoginContext, LOGIN_ACTIONS } from '../../Context/Login';
import { Search } from '@material-ui/icons';
import { useState } from 'react';
import logo from './assets/Creamzotransperant.png';
import { useSnackbar } from 'notistack';
import Autocomplete from '@mui/material/Autocomplete';
import { usePin } from '../../Context/PinsContext';
import { useSearch } from '../../Context/SearchContext';

const NavBar = () => {
  // eslint-disable-next-line
  const [login, setLogin] = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [, setSearchData] = useSearch('');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  // const [notifyOpen, setnotifyOpen] = React.useState(false);
  // eslint-disable-next-line
  const [PinsData, refetch] = usePin();
  // const handlenotifyClose = () => {
  // 	setnotifyOpen(false);
  // };

  useEffect(() => {
    if (search === '') setSearchData(PinsData);
    else setSearchData(filterPin(PinsData, search));
  }, [search, PinsData, setSearchData]);

  return (
    <React.Fragment>
      <div
        className="navbar"
        style={{ paddingTop: '5px', marginBotton: '34px' }}
      >
        <div className="top">
          <NavLink activeClassName="activeLink" to="/" exact>
            <Typography
              variant="h4"
              style={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              <img
                src={logo}
                className="logo"
                alt="logo"
                style={{ height: '65px', width: '205px', marginTop: '5px' }}
              />
            </Typography>
          </NavLink>
          <div className="input-group">
            <div style={{ width: '-webkit-fill-available' }}>
              {/* <InputBase
								type="search"
								
								class="form-control border-0 bg-light navbar_input"
							/> */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={searchBarOptions(PinsData)}
                onInputChange={(event, value) => {
                  setSearch(value);
                }}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      label="Search"
                      aria-describedby="button-addon2"
                      variant="outlined"
                      style={{
                        borderRadius: '2rem',
                        // paddingLeft: "5rem",
                        width: '100%',
                        outline: 'none',
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      startAdornment={
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      }
                    />
                  );
                }}
              />
            </div>
          </div>
        </div>

        <div className="afterloginnav">
          <NavLink activeClassName="activeLink" to="/" className="navs" exact>
            <Typography>Home</Typography>
          </NavLink>
          <div className="links">
            {/*<NavLink activeClassName="activeLink" to="/" className="navs" exact>
							<Typography>
								Home
							</Typography>
						</NavLink>*/}
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
          </div>
          <div className="avatar">
            <Avatar style={{ fontSize: '1vw' }} onClick={handleClick} />
            <Popper
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              style={{ backgroundColor: '#f8f9fe', zIndex: '1000' }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  to="/profile"
                  style={{ textDecoration: 'none', color: '#616d8b' }}
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/settings"
                  style={{ textDecoration: 'none', color: '#616d8b' }}
                >
                  My account
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  enqueueSnackbar('Log Out', { variant: 'success' });
                  localStorage.getItem('creamzToken', '');
                  setLogin({ type: LOGIN_ACTIONS.LOGOUT });
                }}
              >
                <Link to="/" style={{ color: '#616d8b' }}>
                  Logout
                </Link>
              </MenuItem>
            </Popper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;

const searchBarOptions = (PinsData) => {
  if (typeof PinsData !== 'undefined' && PinsData.length > 0)
    return [
      ...new Set([
        ...PinsData?.map((pin) => pin?.title),
        ...flatten(PinsData?.map((pin) => pin?.tags)),
      ]),
    ];
  else return [];
};

const filterPin = (PinsData, filter) => {
  if (typeof PinsData !== 'undefined' && PinsData.length > 0) {
    return PinsData?.filter((pin) => {
      if (
        pin?.title.toLowerCase().includes(filter.toLowerCase()) ||
        pin?.tags.includes(filter)
      )
        return true;
      return false;
    });
  } else return [];
};
// eslint-disable-next-line
const flatten = (arr) => {
  return arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );
};
