import styled from 'styled-components'

export const TrackNumber = styled.div`
    ${({ theme }) => `    
        width: ${theme.spacing(8)};

        ${theme.breakpoints.up('sm')} {
            width: ${theme.spacing(10)};
        }
    `}
`
