import * as React from "react";
import styled from "styled-components";
import { Heart, Light, Money, ThumbsDown } from '../../assets'
import { grid34 } from '../../theme/helpers'

export const InlineReactionsWrapper = styled.div<InlineReactionsWrapperInterface>`
    display: flex;
    opacity: ${ props => props.mouseEnter ? 1 : 0}; 
    padding-left: 20px;
    transition: 2s ease-in-out;
    &:hover {
      opacity: 1;
    }
`;

export const Reaction = styled.div<ReactionInterface>`
    height: 2.6rem;
    width: 2.6rem;
    margin: 0 0.2rem;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    filter: saturate(0.1);
    &:hover{
      filter: saturate(1);
      &::before {
        content: "${props => props.count}";
        top: -2.5rem;
        left: 0.5rem;
        position: relative;
        font-family: ${props => props.theme.fontFamily.secondary};
        font-size: 1.6rem;
        line-height: 1;
        font-weight: bold;
      }
    }
    position: relative;
`

const ReactionBar = styled.div<ReactionBarInterface>`
    background: ${props => 
    props.score > 0.75 ? props.theme.colors.primary[400] :
    props.score > 0.5 ? props.theme.colors.tertiary[400] :
      "rgba(0, 0, 0, 0.1)"};
    width: 1rem;
    height: 0.6rem;
    margin: 1rem 0px;
`
const ReactionBarWrapper = styled.div`
    display:'flex';
    flex-direction: column;
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
       display: none;
    }
`

const ReactionWrapper = styled.div`
    ${grid34}
    display: flex;
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
    justify-content: flex-end;
    margin-top: -1.5rem;
    }
`

interface ReactionBarInterface {
  score: number
}

interface InlineReactionsWrapperInterface {
  mouseEnter: boolean
}

interface ReactionInterface {
  src: string;
  count: number;
}

function InlineReactions({
  mouseEnter,
  overallScore,
  sentimentScoreArray
}){
  return(
    <ReactionWrapper>
    <ReactionBarWrapper>
      {overallScore > 0.75 && <ReactionBar score={overallScore}/>}
      {overallScore > 0.5 && <ReactionBar score={overallScore}/>}
      <ReactionBar score={overallScore}/>
    </ReactionBarWrapper>
    <InlineReactionsWrapper mouseEnter={mouseEnter}>
      <Reaction src={Heart} count={sentimentScoreArray[0]}/>
      <Reaction src={Light} count={sentimentScoreArray[1]}/>
      <Reaction src={Money} count={sentimentScoreArray[2]}/>
      <Reaction src={ThumbsDown} count={sentimentScoreArray[3]}/>
    </InlineReactionsWrapper>
    </ReactionWrapper>
  )
}


export default InlineReactions;
