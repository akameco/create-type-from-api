# create-type-from-api
[![Build Status](https://travis-ci.org/akameco/create-type-from-api.svg?branch=master)](https://travis-ci.org/akameco/create-type-from-api)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Create JSON structure from API request


## Install

```
$ npm install create-type-from-api
```


## Usage

```js
const createTypeFromApi = require('create-type-from-api');

createTypeFromApi('https://qiita.com/api/v2/items').then(result => {
  console.log(result)
})

// [
//   {
//     rendered_body: String
//     body: String
//     coediting: Boolean
//     comments_count: Number
//     created_at: String
//     group: unknown
//     id: String
//     likes_count: Number
//     private: Boolean
//     reactions_count: Number
//     tags: [
//       {
//         name: String
//         versions: []
//       }
//     ]
//     title: String
//     updated_at: String
//     url: String
//     user: {
//       description: String
//       facebook_id: String
//       followees_count: Number
//       followers_count: Number
//       github_login_name: String
//       id: String
//       items_count: Number
//       linkedin_id: String
//       location: String
//       name: String
//       organization: String
//       permanent_id: Number
//       profile_image_url: String
//       twitter_screen_name: String
//       website_url: String
//     }
//   }
// ]
```


## API

### createTypeFromApi(input)

#### input

Type: `string`

Target url.


## License

MIT © [akameco](http://akameco.github.io)
