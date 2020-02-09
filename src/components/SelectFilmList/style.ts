import styled from 'styled-components';
import { Heading2 as DefaultHeading2 } from 'components/Heading';

export const SelectFilmList = styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1;
`;

export const Heading2 = styled(DefaultHeading2)`
    ${props => `
        margin-bottom: ${props.theme.spacing.small}px;
    `}
`;

export const TheaterName = styled.span`
    color: ${props => props.theme.palette.common.black};
`;

export const Films = styled.div`
    flex: 1;
    overflow: scroll;
`;