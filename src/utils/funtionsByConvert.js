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
    '</script>'
]

//make global regex for correct replace
function removeTag(text, tag) {
    let regex = new RegExp(tag, 'g')
    let newText = text.replace(regex, '')
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

    return text
}

module.exports = { transformText }