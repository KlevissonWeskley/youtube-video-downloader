const buttonDownload = document.getElementById('btn-download')
const inputLink = document.getElementById('input-link')

function isURL(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

    return urlRegex.test(url)
}

buttonDownload.addEventListener('click', () => {
    const url = inputLink.value

    if (!isURL(url)) {
        alert('Url inválida.')
        inputLink.value = ''
        return;
    }

    window.open(`http://localhost:3333/download?url=${url}`, '_blank')
    inputLink.value = ''

    inputLink.value = ''
})
