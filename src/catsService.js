const fetch = require('node-fetch')
const _baseURL = 'https://cat-fact.herokuapp.com'
const fs = require('fs')
const Jimp = require('jimp')
module.exports = {
  getFact: async () => {
    const fact = await fetch(`${_baseURL}/facts/random?animal_type=cat&amount=1`)
    const res = await fact.json()
    return res
  },
  getPic: async () => {
    const picObj = await fetch('https://aws.random.cat/meow')
    const pathToPic = await picObj.json()
    const image = await Jimp.read(pathToPic.file)
    return image
  }
}
