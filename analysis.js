function getQueryString() {
    s = window.location.hash;
    if (s.indexOf("#") == -1) {
        return null;
    } else {
        return s.substr(1);
    }
}

function getLink(cookie) {

}