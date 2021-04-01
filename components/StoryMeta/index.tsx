import * as React from "react";
import styled from "styled-components";
import moment from 'moment';
import Reactions from '../Reactions'
import { grid14 } from "../../theme/helpers";

const StoryMetaLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.6rem;
    ${grid14}
    @media (max-width: ${(_) => _.theme.breakpoints.xs}) {
      div > :first-child {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
`;

interface StoryMetaInterface {
  publishedAt: number,
  totalReads: number,
  totalReactions: number,
}

const TotalReads = styled.span`
    padding: 4px 10px;
    margin: 0px 10px;
    background-color: ${props => props.theme.colors.secondary[100]};
    color: ${props => props.theme.colors.secondary[800]};
`

function StoryMeta({ meta }: {
  meta: StoryMetaInterface
}) {

  return (
    <StoryMetaLayout>
      <div>
        {moment(meta.publishedAt).format('MMMM Do YYYY')}
        <TotalReads>★ {meta.totalReads} reads</TotalReads>
      </div>
      <div>
        <Reactions totalReactions={meta.totalReactions} />
      </div>
    </StoryMetaLayout>
  )
}

export default StoryMeta;
