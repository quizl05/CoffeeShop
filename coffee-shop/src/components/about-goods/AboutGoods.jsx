import hotcoffeecup from '../../assets/hotcoffeecup.png'

import './aboutGoods.css'

export default function AboutGoods() {
    return(
        <section className="about_coffee">
            <div className='aboutbeans_flex'>
                <img src={hotcoffeecup} alt='coffeecup'/>
                <div className='aboutbeans_container'>
                    <h2 className='aboutcoffee_title'>About our goods</h2>
                    <div className="divider">
                        <div className='black_bar'/>
                        <div className='divider_grains_black'></div>
                        <div className='black_bar'/>
                    </div>
                    <p className='aboutcoffee_description'>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.<br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    </p>
                </div>
            </div>
            <div className='section_divider'/>
        </section>
    )
}