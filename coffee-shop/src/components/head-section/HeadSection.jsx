import './headSection.css'

export default function HeadSection() {

    return(
        <section className='head_section'>
            <h1>Everything you love about coffee</h1>
            <div className="divider">
                <div className='white_bar'/>
                <div className='divider_grains'/>
                <div className='white_bar'/>
            </div>
            <p>We makes every day full of energy and taste</p>
            <p>Want to try our beans?</p>
            <button className='more_button'><a href="#"></a>More</button>
        </section>
    )
}