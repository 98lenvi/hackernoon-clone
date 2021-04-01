import React from 'react';
import styled from 'styled-components';
import { BrandLogo, Search } from "../../assets"
import { websiteLinks } from "./config"

const Wrapper = styled.div`
    position: sticky;
    top: 0px;
    z-index: 5;
`
interface isScrolledInterface {
    isScrolled: boolean
}

const NavbarWrapper = styled.nav<isScrolledInterface>`
    background-color: ${props => props.theme.colors.primary[800]};
    transition: background-color 200ms ease 0s;
    width: 100%;
    display: ${props => props.isScrolled ? 'none' : 'flex'};
    @media (max-width: ${(_) => _.theme.breakpoints.xs}) {
        display: none;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        padding: 0px 10px;    list-style: none;
        @media (max-width: ${(_) => _.theme.breakpoints.md}) {
            flex-wrap: wrap;
        }
    }

    ul > li {
        padding: 10px 10px;
        a {
            font-size: 1.4rem;
            background-image: none;
            color: ${props => props.theme.colors.secondary[0]};
            font-weight: bold;
            font-family: ${props => props.theme.fontFamily.secondary};
        }
    }
`

const TopbarWrapper = styled.div<isScrolledInterface>`
    display: ${props => props.isScrolled ? 'none' : 'flex'};
    transition: background-color 200ms ease 0s;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    background-color: ${props => props.theme.colors.primary[400]};
    
    & > img {
        height: 40px;
        width: 248px;
        @media (max-width: ${(_) => _.theme.breakpoints.md}) {
            width: 37px;
            object-fit: cover;
            object-position: left;
        }
    }

    & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        * {
            margin-left: 10px;
        }
        @media (max-width: ${(_) => _.theme.breakpoints.xs}) {
            display: none;
        }
    }
`

const AddWrapper = styled.aside`
    background-color: ${props => props.theme.colors.tertiary[400]};
    display: flex;
    a {
        font-size: 1.4rem;
        background-image: none;
        color: ${props => props.theme.colors.tertiary[900]};
        font-weight: bold;
        font-family: ${props => props.theme.fontFamily.secondary};
        padding: 10px 10px;
        width: 100%;
        text-align: center;
        &:hover{
            background-color: ${props => props.theme.colors.tertiary[500]};
        }
    }
`

const SearchBarForm = styled.form`
    position: relative;
    
    input{
        border: none;
        padding: 10px 20px 10px 10px;background-color: ${props => props.theme.colors.primary[800]};
        color: ${props => props.theme.colors.primary[400]};
        padding-right: 10px;
        &::placeholder {
            color: ${props => props.theme.colors.primary[600]};
            opacity: 1; 
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
    
    img {
        width: 19px;
        height: 19px;
        position: absolute;
        right: 6px;
        top: 6px;
    }
`

const BaseButton = styled.a`
    font-family: ${props => props.theme.fontFamily.secondary};
    font-size: 1.5rem;
    font-weight: bold;
    padding: 5px 10px;
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.secondary[900]};
    border-radius: 0px;
    cursor: pointer;
`

const SecondaryButton = styled(BaseButton)`
    border-color: transparent;
    &:hover {
        border: 2px solid ${props => props.theme.colors.secondary[900]};
    }
`

function Navbar() {
    const NavBarRef = React.useRef<HTMLDivElement>();
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
    React.useEffect(() => {
        let interval
        if (NavBarRef.current)
            interval = setInterval(
                () => {
                    if (document.documentElement.scrollTop > 200)
                        setIsScrolled(true)
                    else
                        setIsScrolled(false)
                }, 1000
            )
        return () => clearInterval(interval)
    }, [NavBarRef])

    return (
        <Wrapper ref={NavBarRef}>
            <TopbarWrapper isScrolled={isScrolled}>
                <img src={BrandLogo} />
                <div>
                    <SearchBarForm>
                        <input placeholder='Search...' />
                        <img src={Search} />
                    </SearchBarForm>
                    <BaseButton>
                        Start Writing
                </BaseButton>
                    <SecondaryButton>
                        Log in
                </SecondaryButton>
                </div>
            </TopbarWrapper>
            <NavbarWrapper isScrolled={isScrolled}>
                <ul>
                    {
                        websiteLinks.map(
                            (_, i) => <li key={i}><a href={_.url}>{_.displayText}</a></li>
                        )
                    }
                </ul>
            </NavbarWrapper>
            <AddWrapper>
                <a>
                    Never open Excel again
                </a>
            </AddWrapper>
        </Wrapper>
    )
}

export default Navbar;