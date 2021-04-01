import * as React from "react";
import styled from "styled-components";
import { Heart, Light, Money, ThumbsDown } from '../../assets'
import { grid23 } from '../../theme/helpers'

export const ReactionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${grid23}
`;

export const Reaction = styled.div<ReactionInteface>`
    height: 30px;
    width: 30px;
    margin: 0 0.2rem;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    filter: saturate(0.1);
    &:hover{
      filter: saturate(1);
    }
`

const TotalReactions = styled.span`
    font-family: ${props => props.theme.fontFamily.secondary};
    font-size: 2rem;
    font-weight: bold;
    margin: 0px 10px;
`

interface ReactionInteface {
  src: string;
}


function Reactions({
  totalReactions
} : {
  totalReactions: number
}){
  return(
    <ReactionsWrapper>
      <TotalReactions>{totalReactions}</TotalReactions>
      <Reaction src={Heart} />
      <Reaction src={Light} />
      <Reaction src={Money} />
      <Reaction src={ThumbsDown}/>
    </ReactionsWrapper>
  )
}


export default Reactions;
