import * as React from "react";
import Interweave, { Node } from 'interweave';
import styled from "styled-components";
import { polyfill } from 'interweave-ssr';
import InlineReactions from '../InlineReactions';
import Gist from 'react-gist';

export const ContentParagraph = styled.p`
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
        margin-top: -1rem !important;
        margin-bottom: -1rem !important;
    }
`

function Content({ markup }) {
    polyfill();

    const transform = (node: HTMLElement, children: Node[]): React.ReactNode => {
        if (node.tagName === 'div' && node.getAttribute('class') === 'paragraph') {
            let [mouseEnter, setMouseEnter] = React.useState(false);
            const overallScore = 0.4;
            const sentimentScoreArray = [
                4,
                5,
                8,
                9
            ]

            return (
                <>
                    <ContentParagraph 
                        onMouseEnter={() => setMouseEnter(true)} 
                        onMouseLeave={() => setMouseEnter(false)} 
                        onTouchStart={() => setMouseEnter(true)}
                        onTouchEnd={() => setMouseEnter(false)}
                        >{children}</ContentParagraph>
                    <InlineReactions overallScore={overallScore} sentimentScoreArray={sentimentScoreArray} mouseEnter={mouseEnter} />
                </>
            );
        } else if (node.tagName === 'div' && node.getAttribute('class') === 'gist-container') {
            let gistId = '';
            node.childNodes.forEach(
                childNode => {
                    //@ts-ignore
                    const id: string = childNode.getAttribute('id');
                    if (id)
                        gistId = id.replace('gist-', '');
                }
            )
            return (
                <div className='gist-container'>
                    <Gist id={gistId} />
                </div>
            );
        }
    }
    return (
        <Interweave
            content={markup}
            transform={transform}
            tagName={'fragment'}
            allowElements={true}
        />
    )
}

export default Content;
