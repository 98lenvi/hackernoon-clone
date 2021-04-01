import styled from 'styled-components';
import { grid23 } from '../../theme/helpers';

const TagsSection = styled.section`
    ${grid23}
    
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    h4 {
        font-weight: 900;
        font-size: 2.4rem;
        text-transform: uppercase;
        font-family: ${props => props.theme.fontFamily.primary};
        text-align: center;
    }
    a {
        background-image: none;
        text-decoration: underline;
        font-family: ${props => props.theme.fontFamily.secondary};
        line-height: 1em;
        font-size: 1.4rem;
        box-shadow: rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em, rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px;
        background: rgb(246, 247, 249);
        font-weight: bold;
        padding: 10px;
        margin: 0px 10px 10px 0px;
    }
`

function StoryTags({
    tags
}: {
    tags: Array<string>
}) {
    return (
        <TagsSection>
            <h4>
                TAGS
            </h4>
            <div>
                {
                    tags?.map(
                        (tag, key) =>
                            <>
                                <a href={tag} key={key}>
                                    #{tag}
                                </a>
                            </>
                    )
                }
            </div>
        </TagsSection>
    )
}

export default StoryTags;