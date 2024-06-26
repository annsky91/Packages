export { Page }

import { useData } from 'sky/examples/web/renderer/useData'

import type { Data } from './+data'

import { PageLayout } from 'sky/examples/web/layouts/PageLayout'

function Page(): ReactNode {
    const { movie } = useData<Data>()
    return (
        <PageLayout>
            <h1>{movie.title}</h1>
            Release Date: {movie.release_date}
            <br />
            Director: {movie.director}
            <br />
            Producer: {movie.producer}
        </PageLayout>
    )
}
