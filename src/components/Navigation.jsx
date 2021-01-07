import React, { useState } from "react";
import styled from "styled-components";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = styled.nav`
  
  width: 80%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0 auto;
`;

const NavbarWrapper = styled.div`
  min-width: 100vw;
  box-shadow: 0 .2rem .4rem 0 rgba(0, 0, 0, 0.1);
  padding:1.5rem 0;
  position: fixed;
  z-index:20;
  

  background-color: #fff;
`

const NavTitle = styled.h2`
  padding: .5rem 0;
  text-transform: uppercase;
  font-size:1.8rem;
`

const Navigation = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const [Term, setTerm] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    history.push("/search?q=" + Term);
    setTerm("")
  };
  return (
    <NavbarWrapper>
      <Navbar>
        <div>
          <Link to="/" style={{textDecoration:"none", color:"black"}}>
            <NavTitle style={{ padding: ".5rem 0", textTransform: "uppercase" }}>
              🎬 Movie Library
            </NavTitle>
          </Link>
        </div>
        <form onSubmit={onFormSubmit}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Movie"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={Term}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </form>
      </Navbar>
      </NavbarWrapper>
  );
};

export default Navigation;
