import React from 'react';
import styled from 'styled-components';
import { ProfileInterface } from '../../interfaces';
import { BrandIcon } from "../../assets"
import { SocialShareLink, SocialShareWrapper } from '../StoryFooter';
import { Facebook, Email, LinkedIn, Twitter } from "../../assets"

interface isScrolledInterface {
    isScrolled: boolean
}

const StoryTopbarWrapper = styled.div<isScrolledInterface>`
    display: ${props => props.isScrolled ? 'flex' : 'none'};
    flex-direction: 'row';
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 4rem;
    z-index: 4;
    left: 0px;
    right: 0px;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 15px;
    font-family: ${props => props.theme.fontFamily.secondary};
    font-size: 1.6rem;
    font-weight: bold;
    background-color: ${props => props.theme.colors.secondary[0]};
    transition: 1s ease-in-out;
    padding: 10px;
    &>img{
        height: 24px;
    }
    span {
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0px 5px;
    }
`

function StoryTopBar({
    title,
    profile
}: {
    title: string,
    profile: ProfileInterface
}) {
    const NavBarRef = React.useRef<HTMLDivElement>();
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
    React.useEffect(() => {
        let interval
        if (NavBarRef.current)
            interval = setInterval(
                () => {
                    if (document.documentElement.scrollTop > 250)
                        setIsScrolled(true)
                    else
                        setIsScrolled(false)
                }, 1000
            )
        return () => clearInterval(interval)
    }, [NavBarRef])
    return (
        <StoryTopbarWrapper ref={NavBarRef} isScrolled={isScrolled}>
            <img src={BrandIcon} />
            <span>{title}<br /><small>by <a>@{profile?.handle}</a></small></span>
            <SocialShareWrapper>

                <SocialShareLink src={Twitter} />
                <SocialShareLink src={Facebook} />
                <SocialShareLink src={LinkedIn} />
                <SocialShareLink src={Email} />

            </SocialShareWrapper>
        </StoryTopbarWrapper>
    )
}

export default StoryTopBar