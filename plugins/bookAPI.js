
// demo.api-platform.com/books
const axios = require('axios/dist/browser/axios.cjs');
const querystring = require('querystring');

const client = axios.create({
    baseURL: 'https://demo.api-platform.com/',
})

// 可以把API整理成一個物件，並且注入到Vue實例中
// 記得在nuxt.config.js中註冊這個plugin
export default ({ app }, inject) => {
    const bookAPI = {
        getBooks: async (data = {}) => {
            const query = {
                page: data.page || 1,
                itemsPerPage: data.itemsPerPage || 10,
            }
            return await client.get('books', querystring.stringify(query))
        },
        // demo id is 01892da6-52ea-7289-88b7-8b3b2deb6fa0
        getBookById: async (id) => client.get(`books/${id}`),
    }
    inject('bookAPI', bookAPI)
}