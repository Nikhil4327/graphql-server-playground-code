import { gql } from "apollo-server-core";
const Schema = gql`
type Book{
    id :Int
    name : String
    password: String
    by: String
    email: String
}
type Quote{
    description : String
    by : String
    id : Int
}
type Todo{
    userId: ID
    id: Int
    title: String
    completed: Boolean
}
type Query{
    books : [Book]
}
extend type Query{
    quotes : [Quote]
}
extend type Query{
    todos : [Todo]
}
`
export default Schema