import styled from 'styled-components';

export const Film = styled.a`
    ${props => `
        background: ${props.theme.palette.common.white};
        color: ${props.theme.palette.common.black};
        border: 1px solid ${props.theme.palette.common.black}};
        border-radius: ${props.theme.borderRadius.default}px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        margin-bottom: ${props.theme.spacing.small}px;
        padding: 0px ${props.theme.spacing.medium}px;
        text-decoration: none;
        &:focus {
            outline: none;
        }
        &:hover, &:focus {
            background: ${props.theme.palette.common.black};
            color: ${props.theme.palette.primary};
            cursor: pointer;
        }
    `}
`;

export const Title = styled.span`
    text-transform: uppercase;
    font-size: 22px;
    font-weight: bold;
    margin-right: ${props => props.theme.spacing.medium}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Icon = styled.img`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
`;