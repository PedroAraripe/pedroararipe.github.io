import styled from 'styled-components';

export const TitleSection = styled.h1`
    margin-bottom: 2rem;
    
    @media (min-width: 768px) {
        margin-bottom: 3rem;
    }

    color:${props => props.themeColor ?? 'white'};

    :before {
        content:'\${ ';
        color:${props => props.asideColor ?? 'white'};
    }

    :after {
        color:${props => props.asideColor ?? 'white'};
        content:' }';
    }
` 