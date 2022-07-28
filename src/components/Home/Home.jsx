import { useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import './home.css'
function Home() {
    const words = useSelector(state => state.words)
    return (
        <div className="col-12 d-flex flex-column gap-4 container-home">
            <Nav />
            <div className="col-11 col-md-8 bg-dark rounded-2 d-flex justify-content-center container-results">
                <div className="col-12 d-flex">
                    <h3 className="col-3 col-md-2 text-center text">Results:</h3>
                    <div className="col-6 col-md-8 d-flex flex-column pt-5 results">
                        {words[0] == undefined ?
                            <h5 className="col-12 text-center mt-5">Ingresa una palabra o frase</h5>
                            :
                            words?.map((w, i) =>
                                w.palindrome ?
                                    <div key={`${w.text}${i}`} className="d-flex align-items-center "><span data-testid={`text-${i}`} className="col-6 col-md-9 col-lg-10 rounded-1 result">{w.text}</span> <span data-testid="palindrome" className="col-6 col-md-3 col-lg-2 palindrome">Palindromo</span></div>
                                    :
                                    <span key={`${w.text}${i}`} data-testid={`text-${i}`} className="col-12 rounded-1 result">{w.text}</span>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
// words?.map((w, i) => <div className="d-flex align-items-center gap-1"><span key={`${w.text}${i}`} className="col-10 rounded-1 result">{w.text}</span> <span className="col-2 palindrome">Palindromo</span></div>)
