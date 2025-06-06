// Components/Arrows.jsx
import '../Styles/arrows.css'

function Arrow() {
  return (
    <div className="arrows-container">
      <svg className="arrows">
        <path className="a1" d="M0 0 L32 30 L0 60"></path>
        <path className="a2" d="M20 0 L52 30 L20 60"></path>
        <path className="a3" d="M40 0 L72 30 L40 60"></path>
      </svg>
    </div>
  );
}

export default Arrow;