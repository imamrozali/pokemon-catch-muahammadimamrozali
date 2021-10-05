import { useHistory } from 'react-router-dom'
import styled from "@emotion/styled";
import React from "react";

interface Props { }

const Navigation: React.FC<Props> = (props) => {
    const history = useHistory()
    const openMyListPokemon = () => {
        history.push(`/my-pokemon`)
    }
    const openListPokemon = () => {
        history.push(`/`)
    }
    return (
        <NavMenu>
            <Button onClick={() => openMyListPokemon()}>My Pokemon</Button>
            <Button color="green" onClick={() => openListPokemon()}>List Pokemon</Button>
        </NavMenu>
    );
};
const NavMenu = styled.div`
    width:100%;
    height:60px;
    position:fixed;
    bottom:0;
    right: 0;
    text-align: center;
    backdrop-filter: blur( 5px );
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    text-transform: uppercase;
    background: #fff;
    z-index:999;
`
const Button = styled('button')`
    background-color: #fff;
    width: 50%;
    padding: 20px;
    border: none;
    outline: none;
    float: right;
    @media (max-width: 480px) {
        width: 50%;
    }
`
export default Navigation;
