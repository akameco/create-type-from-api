#!/usr/bin/env node
'use strict'
const meow = require('meow')
const axios = require('axios')
const createTypeFromApi = require('.')

const cli = meow(`
	Usage
	  $ create-type-from-api [url]

	Examples
	  $ create-type-from-api https://qiita.com/api/v2/items
`)

const { input } = cli

if (!input[0]) {
  console.log('url required')
  process.exit(1)
}

axios
  .get(input[0])
  .then(({ data }) => {
    return createTypeFromApi(data)
  })
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.error(err)
  })
