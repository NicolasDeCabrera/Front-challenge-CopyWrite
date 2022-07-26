import { useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import './home.css'
function Home() {
    const words = useSelector(state => state.words)
    return (
        <div className="col-12 d-flex flex-column gap-4 container-home">
            <Nav />
            <div className="col-8 bg-dark rounded-2 d-flex justify-content-center container-results">
                <div className="col-12 d-flex">
                    <h3 className="col-2 text">Results:</h3>
                    <div className="col-8 d-flex flex-column pt-5 results">
                        {
                            words?.map((w, i) => <span key={`${w.text}${i}`} className="col-12 rounded-1 result">{w.text}</span>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home; 