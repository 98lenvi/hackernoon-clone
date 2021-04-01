import * as React from "react";
import styled from "styled-components";
import { ProfileInterface } from '../../interfaces'

const ProfileLayout = styled.div`
    grid-row: span 4 / auto;
    grid-column: 1 / span 1;
    display: flex;
    flex-direction: column;
    small {
        display: block;
        margin-top: 0.5rem;
        font-size: 80%;
    }
    p {
        margin: 0px;
        font-size: 1.6rem;
    }
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
        grid-column: 1 / span 3;
        flex-direction: row;
        div {
            margin-left: 2rem;
        }
        h3 {
            margin-top: 0;
        }
    }
`;

const ProfileImage = styled.img`
    max-width: 75px;
    object-fit: cover;
    box-shadow: rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em, rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px;
    `

function Profile({profile} : {profile: ProfileInterface}){
    return(
        <ProfileLayout>
            <ProfileImage src={profile?.avatar} width="50" height="50" loading="lazy"/>
            <div>
            <h3>
                <a href={profile?.handle}>{`@${profile?.handle}`}</a>
                <small>{profile?.displayName}</small>
            </h3>
            <p>{profile?.bio}</p>
            </div>
        </ProfileLayout>
    )
}

export default Profile;
