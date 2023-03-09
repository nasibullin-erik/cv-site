const OpenLink = (link, newWindow) => {
    let alink = document.createElement('a')
    alink.href = link
    if (newWindow === false) {
        alink.target = '_self'
    } else {
        alink.target = '_blank'
    }
    alink.click();
}

export { OpenLink }