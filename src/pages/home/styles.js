import styled from 'styled-components';

export const TitleSection = styled.h1`
    color:white;

    :before {
        content:'\${ ';
    }

    :after {
        content:' }';
    }
` 