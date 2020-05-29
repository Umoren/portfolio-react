import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 640px) {
        display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
        flex-direction: column;
    }
`;

export const Header = styled.div`
    display: flex;

    @media (max-width: 650px) {
        flex-direction: column;
        margin: auto;
        text-align: center;
    }
`;

export const Image = styled.img`
    width: 200px;
    margin-right: 1rem;
    border-radius: 3px;

    @media(max-width: 640px){
        margin: auto;
        border-radius: 50%;
        border: 3px solid #777;
        -webkit-box-shadow: 0 35px 20px transparent;
        -moz-box-shadow: 0 35px 20px transparent;
        box-shadow: 0 35px 20px transparent;
        -webkit-transform: rotate(-8deg);
        -moz-transform: rotate(-8deg);
        -o-transform: rotate(-8deg);
        -ms-transform: rotate(-8deg);
        transform: rotate(-8deg);
    }
`;

export const ViewResumeLink = styled.a`
    display: flex;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    align-items: center;
    margin-top: 1rem;
    border: 2px solid #2ecc40;
    background-color: rgba(46, 204, 64, 0.3);
    transition: background-color 250ms ease;

    &:hover {
        background-color: #2ecc40;
    }

    svg {
        fill: white;
        margin-left: 8px;
    }

    @media(max-width: 640px){
        svg{
            display: none;
        }

        span{
            margin: auto;
        }
    }
`;