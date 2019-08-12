const Kuroshiro = require('kuroshiro')
const kuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji')

const utils = require('../utils/funtionsByConvert')

const converterCore = new Kuroshiro()

converterCore.init(new kuromojiAnalyzer())
    .then(_ => console.log('converter started'))

const converter = async (req, res) => {
    try {
        let text = req.body.text
        const settings = { ...req.body.settings }

        text = utils.transformText(text)
        const convertingArray = []

        for (session of text) {
            convertingArray.push(await converterCore.convert(session, settings))
        }

        text = convertingArray.reduce((acc, current) => `${acc}<p>${current}</p>`)
        
        res.send(text)
    } catch (err) {
        res.status(400).send(err)
    }

}

module.exports = { converter }