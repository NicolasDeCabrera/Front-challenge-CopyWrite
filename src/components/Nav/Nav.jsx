import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchWord } from "../../redux/actions/actions";

function Nav() {
    const dispatch = useDispatch()
    const [word, setWord] = useState("")
    function search(e) {
        e.preventDefault();
        dispatch(searchWord(word))
        setWord("")
    }
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex col-4">
                    <input value={word} onChange={(e) => setWord(e.target.value)} className="form-control me-2 col-10" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={search} className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Nav;