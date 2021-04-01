import * as React from "react";
import styled from "styled-components";
import { grid14 } from "../../theme/helpers";

const StoryHeroBannerWrapper = styled.div`
    ${grid14}
    cursor: pointer;
    img {
        width: 100%;
        &:hover {
            transform: scale(1.01);
            transition: 0.1s ease-in-out;
        }
    }
`

function StoryHeroBanner({url}: {
    url : string
}){

    return(
        <StoryHeroBannerWrapper>
            <img src={url} />
        </StoryHeroBannerWrapper>
    )
}

export default StoryHeroBanner;
