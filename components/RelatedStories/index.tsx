import styled from 'styled-components';
import { RelatedStoryInterface } from "../../interfaces"
import { grid23 } from '../../theme/helpers';

const RelatedStoriesTable = styled.aside`
    display: grid;
    grid-template-columns: 3fr 1fr;
    ${grid23}
    border-top: 1px solid rgb(232, 232, 232);
    border-left: 1px solid rgb(232, 232, 232);
    font-family: ${props => props.theme.fontFamily.secondary};
    font-size: small;
    .head {
        border-bottom: none !important;
        font-weight: 600;
    }
    div {
        border-bottom: 1px solid rgb(232, 232, 232);
        border-right: 1px solid rgb(232, 232, 232);
        padding: 10px 20px;
    }
    a {
        background-image: none;
        text-decoration: underline;
    }
`

function RelatedStories({
    stories
}: {
    stories: Array<RelatedStoryInterface>
}) {
    return (
        <RelatedStoriesTable>
            <>
                <div className={'head'}>
                    Related Stories
                </div>
                <div className={'head'}>
                    Subject Matter
                    </div>
            </>
            {
                stories?.filter(_ => _.title)?.map(
                    (story, key) =>
                        <>
                            <div key={key + 'l'}>
                                <a href={story.slug}>
                                    {story.title}
                                </a>{" "}by{" "}
                                <a href={story.profile.handle}>
                                    @{story.profile.handle}
                                </a>
                            </div>
                            <div key={key + 'r'}>
                                <a href={story.tags?.[0]}>
                                    #{story.tags?.[0]}
                                </a>
                            </div>
                        </>
                )
            }
        </RelatedStoriesTable>
    )
}

export default RelatedStories;