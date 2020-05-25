const horizontal = 1,
    vertical = 1,
    blur = 3,
    offset = 0.7

export const darkShadow = `${horizontal}px ${vertical}px ${blur}px #000000`
export const lightShadow = `${horizontal}px ${vertical}px ${blur}px #ffffff`

export const darkDropShadow = `${horizontal - offset}px ${vertical - offset}px ${
    blur - offset
}px #000000`
export const lightDropShadow = `${horizontal - offset}px ${vertical - offset}px ${
    blur - offset
}px #ffffff`
