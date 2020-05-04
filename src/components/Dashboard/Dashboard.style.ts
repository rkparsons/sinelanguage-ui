import { pageTransition } from '~/styles/timings'
import styled from 'styled-components'

type DashboardProps = {
    isBlur: boolean
}

export const Dashboard = styled.div<DashboardProps>`
    ${({ isBlur }) => `
            filter: blur(${isBlur ? 12 : 0}px);
            transition: ${pageTransition}s filter linear;
            padding-bottom: 200px;

            :after {
                content: " ";
                pointer-events: none;
                position: absolute;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                background-color: white;
                opacity: ${isBlur ? 0.1 : 0};
                transition: ${pageTransition}s opacity linear;
            }
    `}
`
