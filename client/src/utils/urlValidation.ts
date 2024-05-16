function isValidURL(url: string): boolean {
    const urlRegex =
        /^(https?:\/\/)?((([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[^\s]*)?$/;
    return urlRegex.test(url);
}

export default isValidURL;
