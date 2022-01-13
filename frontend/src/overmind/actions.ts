import { Context } from '.'
export const getBooks = async ({ state, effects }: Context) => {
    const { books } = await effects.gql.queries.books({})

    state.books = books
}