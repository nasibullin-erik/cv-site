const DownloadResume = () => {
    fetch('static/resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Erik-Resume.pdf';
            alink.click();
        })
    })
}

export { DownloadResume }