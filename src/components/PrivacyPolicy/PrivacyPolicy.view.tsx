import React from 'react'

export default () => {
    const loader = function() {
        var scriptTag = document.createElement('script'),
            tag = document.getElementsByTagName('script')[0]
        scriptTag.src = 'https://cdn.iubenda.com/iubenda.js'
        tag.parentNode!.insertBefore(scriptTag, tag)
    }

    if (typeof window !== `undefined`) {
        if (window.addEventListener) {
            window.addEventListener('load', loader, false)
        } else {
            window.onload = loader
        }
    }

    return (
        <>
            <a
                href="https://www.iubenda.com/privacy-policy/95629151"
                className="iubenda-black no-brand iubenda-embed"
                title="Privacy Policy "
            >
                Privacy Policy
            </a>
        </>
    )
}
