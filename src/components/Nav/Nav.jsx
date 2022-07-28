import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchWord } from "../../redux/actions/actions";
import swal from 'sweetalert'
// import './nav.css'

function Nav() {
    const dispatch = useDispatch()
    const [word, setWord] = useState("")
    function search(e) {
        e.preventDefault();
        //si word está vacio
        if (word === "") {
            swal("", "Escribe una palabra", "warning");
        }
        else {
            //si word es texto 
            if (isNaN(parseInt(word))) dispatch(searchWord(word))
            //si word no es texto 
            else swal("", "Tienes que ingresar solo texto", "warning");
        }

        setWord("")
    }

    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex col-6 col-md-4 justify-content-center">
                    <input value={word} onChange={(e) => setWord(e.target.value)} className="form-control me-2 col-10" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={search} className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Nav;