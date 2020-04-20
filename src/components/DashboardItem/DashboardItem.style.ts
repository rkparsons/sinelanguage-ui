import styled from 'styled-components'

type DashboardItemProps = {
    widthMultiplier: number
}

export const DashboardItem = styled.div<DashboardItemProps>`
    ${({ theme, widthMultiplier }) => `
        width: 100vw;
        ${theme.breakpoints.only('sm')} {
            width: ${(widthMultiplier * 100) / 2}vw;
        }
        ${theme.breakpoints.only('md')} {
            width: ${(widthMultiplier * 100) / 3}vw;
        }
        ${theme.breakpoints.only('lg')} {
            width: ${(widthMultiplier * 100) / 5}vw;
        }
        ${theme.breakpoints.only('xl')} {
            width: ${(widthMultiplier * 100) / 6}vw;
        }
    `}
`

export const DashboardItemInfo = styled.div`
    ${({ theme }) => `
        min-height: ${theme.spacing(20)};
    `}
`
