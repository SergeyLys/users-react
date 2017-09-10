/* eslint-disable no-use-before-define */
export default function checkToken(token) {

    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + token.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;

}
/* eslint-enable no-use-before-define */