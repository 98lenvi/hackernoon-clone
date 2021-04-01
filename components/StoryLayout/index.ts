import styled from "styled-components";
import { grid14, grid23 } from '../../theme/helpers';

const StoryLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 2rem 25px;
    margin-bottom: 4rem;
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
      grid-template-columns: 100%;
      gap: 2rem 0px;
    }
    font-size: 2rem;
    h1 {
      ${grid14}
      text-align: center;
    }
    h2, h3, .youtube-container, .gist-container, p {
      ${grid23}
    }
    blockquote, .code-container {
      ${grid14}
    }
`;

export default StoryLayout;
