import styled from 'styled-components';
import { socialLinks,websiteLinks1,websiteLinks2} from './config';

const FooterWrapper = styled.footer`
    background-color: ${props => props.theme.colors.secondary[100]};
    padding: 2rem;
    font-size: 1.4rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    a {
        margin: 0px 10px 10px 0px;
    }
    img {
        width: 20px;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    @media (max-width: ${(_) => _.theme.breakpoints.sm}) {
        flex-wrap: wrap;
        div {
            width: 100%;
            margin-bottom: 1rem;
        }
    }
`

function Footer(){
return(
    <FooterWrapper>
        <div>
            <ul>
            {
                websiteLinks1.map(
                    (_,i) => <a href={_.url} key={i} dangerouslySetInnerHTML={{__html:_.displayText}}/>
                )
            }
            </ul>
            <ul>
            {
                websiteLinks2.map(
                    (_,i) => <a href={_.url} key={i} dangerouslySetInnerHTML={{__html:_.displayText}}/>
                )
            }
            </ul>
        </div>
        <div>
        <ul>
            {
                socialLinks.map(
                    (_,i) => <a href={_.url} key={i}>
                            <img src={_.iconUrl}/>
                        </a>
                )
            }
            </ul>
        </div>
    </FooterWrapper>
)
}

export default Footer;