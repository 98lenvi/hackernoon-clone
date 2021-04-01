import * as React from "react";
import styled from "styled-components";
import { ProfileInterface } from '../../interfaces'
import { Facebook, Email, LinkedIn, Twitter } from "../../assets"
import { grid23 } from "../../theme/helpers";

const StoryFooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${grid23}
    margin: 1rem auto;
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
        flex-wrap: wrap;
        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }
    small {
        display: block;
        margin-top: 0.5rem;
        font-size: 80%;
    }
    a:hover {
        background: none;
    }
    background-color: ${props => props.theme.colors.secondary[800]};
    color: ${props => props.theme.colors.primary[400]};
    h3 > a {
        color: inherit;
        white-space: nowrap;
    }
    border-image: url(https://hackernoon.com/Devimg/hn-ad-green.png) 16 / 1 / 8px stretch;
    border-style: solid;
    border-width: 16px;
`

const StoryFooterImage = styled.img`
    max-width: 50px;
    max-height: 50px;
    object-fit: cover;
    margin-right: 2rem;
    box-shadow: rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em, rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px;
`
const Ad = styled.a`
    color: inherit;
    background-image: none;
    font-size: 1.75rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
`
export const SocialShareLink = styled.div<SocialShareLinkInterface>`
    height: 2.6rem;
    width: 2.6rem;
    margin: 0 0.2rem;
    background-image: url("${props => props.src}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
        height: 2.0rem;
        width: 2.0rem;
    }
`
export const SocialShareWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    ${SocialShareLink} {
        margin-left: 1.5rem;
    }
    ${grid23}
`

interface SocialShareLinkInterface {
    src: string;
}

function StoryFooter({ profile }: { profile: ProfileInterface }) {
    return (
        <>
            <SocialShareWrapper>
                Share this story{" "}

                <SocialShareLink src={Twitter} />
                <SocialShareLink src={Facebook} />
                <SocialShareLink src={LinkedIn} />
                <SocialShareLink src={Email} />

            </SocialShareWrapper>
            <StoryFooterWrapper>
                <div>
                    <StoryFooterImage src={profile?.avatar} />
                    <h3>
                        <a href={profile?.handle}>{`@${profile?.handle}`}</a>
                        <small>{profile?.displayName}</small>
                    </h3>
                </div>
                <Ad href={profile?.adLink}>
                    <i className={profile?.adIcon} />
                    {profile?.adText}
                </Ad>
            </StoryFooterWrapper>
        </>
    )
}

export default StoryFooter