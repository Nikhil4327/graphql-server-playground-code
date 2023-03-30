import {books,Quotes} from "./graphlqlhelper/index.js";
import fetch from 'node-fetch'
const resolvers = {
    Query :{
        books : () => books,
        quotes : () => Quotes.map(q => {
            q.id = Math.floor(Math.random()*100) + 1
            return q
        }),
        todos: async() =>{
            let result  = await(fetch('https://jsonplaceholder.typicode.com/todos'))
            result = result.json();
            return result
        }


    }
}
export default resolvers