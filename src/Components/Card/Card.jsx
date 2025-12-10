
import './Card.css'


export default function Card({ img, title }) {
  return (
    <article className="card-custom">
      <div className="card-image-wrap">
        <img src={img} alt={title} className="card-img" />
        <div className="card-overlay">
          <div className="overlay-content">
            <span className="overlay-icon"><i className="fa-solid fa-plus" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>

     
    </article>
  )
}
