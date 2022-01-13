import { Context } from "."

export const onInitialize = ({ effects }: Context) => {
    effects.gql.initialize({
        // query and mutation options
        endpoint: 'http://localhost:4000',
    }, {
        // subscription options
        endpoint: 'ws://localhost:4000',
    })
}