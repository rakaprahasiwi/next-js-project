import { useRouter } from "next/dist/client/router"
import { getMovieById } from "../../actions"

const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>{movie.genre}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <p className="desc-text">{movie.long_desc}</p>
            <style jsx>{`
                .desc-text {
                    font-size: 16px
                }
            `
            }
            </style>
        </div>
    )
}

Movie.getInitialProps = async ({ query }) => {
    const movie = await getMovieById(query.id)
    return { movie }
}

export default Movie