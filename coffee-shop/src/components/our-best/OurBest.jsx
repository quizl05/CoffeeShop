import aromistico from '../../assets/best_beans/aromistico.png'
import presto from '../../assets/best_beans/presto.png'
import solimo from '../../assets/best_beans/solimo.png'

import './ourBest.css'


export default function OurBest() {
    return(
        <section className="ourbest_section">
                <h2 className="ourbest_title">Our Best</h2>
                <div className="best_container">
                    <div className="beans_offer">
                        <img src={solimo} alt='solimo_beans'/>
                        <a href="#" className="beans_title">Solimo Coffee Beans 2 kg</a>
                        <p className="bestbeans_price">10.73$</p>
                    </div>
                    <div className="beans_offer">
                        <img src={presto} alt='presto_beans'/>
                        <a href="#" className="beans_title">Presto Coffee Beans 1 kg</a>
                        <p className="bestbeans_price">15.99$</p>
                    </div>
                    <div className="beans_offer">
                        <img src={aromistico} alt='aromistico_beans'/>
                        <a href="#" className="beans_title">AROMISTICO Coffee 1 kg</a>
                        <p className="bestbeans_price">6.99$</p>
                    </div>
                </div>
        </section>
    )
}