//tags for remove
const tags = [
    '&nbsp;',
    '<b>',
    '</b>',
    '<strong>',
    '</strong>',
    '<i>',
    '</i>',
    '<em>',
    '</em>',
    '<mark>',
    '</mark>',
    '<small>',
    '</small>',
    '<del>',
    '</del>',
    '<ins>',
    '</ins>',
    '<sub>',
    '</sub>',
    '<sup>',
    '</sup>',
    '<hr>',
    '</p>',
    '<p>',
    '<script>',
    '</script>',
    '<h1>',
    '<h2>',
    '<h3>',
    '<h4>',
    '<h5>',
    '<h6>',
    '</h1>',
    '</h2>',
    '</h3>',
    '</h4>',
    '</h5>',
    '</h6>'
]

//make global regex for correct replace
function removeTag(text, tag) {
    let substitute = tag === '</p>' ? '<br>' : ''
    let regex = new RegExp(tag, 'g')
    let newText = text.replace(regex, substitute)
    return newText
}

//remove all tags exceted <br>
//make array using <br> tag
function transformText(text) {
    tags.forEach(tag => {
        if (text.includes(tag)) {
            text = removeTag(text, tag)
        }
    })

    text = text.split('<br>')
    // text = text.map(textSession => textSession.split('<br>'))

    return text
}

module.exports = { transformText }