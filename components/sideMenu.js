import Link from "next/link"
import { useState } from "react"
import { createMovie } from "../actions"
import Modal from "./modal"
import MovieCreateForm from "./movieCreateForm"

const SideMenu = (props) => {
    const { categories } = props
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            console.log(JSON.stringify(movies))
            modal.closeModal()
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
                            <a className="list-group-item">{category.name}</a>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default SideMenu