// Inspired by Cloud to Butt.

walk(document.body);

function walk(node) {

    // Function from http://is.gd/mwZp7E

    var child, next;
    switch(node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while(child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var text = textNode.nodeValue;
    
    // Replace ei with ie
    text = text.replace(/(E|e)(I|i)/g, function(match, p1, p2, offset, string) {
        i = String.fromCharCode(p1.charCodeAt(0) + 4);
        e = String.fromCharCode(p2.charCodeAt(0) - 4);

        return i + e;
        });

    // "cei" is now "cie", so fix that
    text = text.replace(/(C|c)(I|i)(E|e)/g,
        function(match, p1, p2, p3, offset, string){
        
        i = String.fromCharCode(p3.charCodeAt(0) + 4);
        e = String.fromCharCode(p2.charCodeAt(0) - 4);

        return match.charAt(0) + e + i;
        });

    textNode.nodeValue = text;
}
