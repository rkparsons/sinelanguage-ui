export const responsiveFont = (xs: number, sm: number, md: number, lg: number, xl: number) => ({
    '@media (min-width:0px)': {
        fontSize: xs,
    },
    '@media (min-width:600px)': {
        fontSize: sm,
    },
    '@media (min-width:960px)': {
        fontSize: md,
    },
    '@media (min-width:1280px)': {
        fontSize: lg,
    },
    '@media (min-width:1920px)': {
        fontSize: xl,
    },
})
