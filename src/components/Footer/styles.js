import styled from 'styled-components';
import { blue } from '@carbon/colors';

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 48px;
    background-color: transparent;
    color: #ffffff;
    text-align: center;

    @media(max-width: 640px) {
        background-color: ${blue[70]};
    }

    p {
        position: relative;
        top: .75rem;
        bottom: .75rem;
    }
`;
