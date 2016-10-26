function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for(i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c > 0x4000){
            c = c - 0x4000
        }
        out += String.fromCharCode(c);
    }
    return out;
}

