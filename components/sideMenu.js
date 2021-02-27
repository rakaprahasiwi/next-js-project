import Link from "next/link"
import { useRouter } from "next/router"
import { createMovie } from "../actions"
import Modal from "./modal"
import MovieCreateForm from "./movieCreateForm"

const SideMenu = (props) => {
    const { categories } = props
    const router = useRouter()
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal()
            router.push('/')
        })
    }

    return (
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {
                    categories.map(category =>
                        <Link key={category.id} href="#">
                            <a onClick={() => props.changeCategory(category.name)}
                                className={`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}>{category.name}</a>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default SideMenu