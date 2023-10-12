import "./MemoryCell.css";
import Bhad1Logo from '../../img/Bhad1Logo.png'

function MemoryCell() {
  return (
    <div className="memory-cell">
        <img src={Bhad1Logo} alt={Bhad1Logo} className="memory-photo"/>
        <div>הטקסט שיהיה כתוב פה</div>
        <a> השיר הכי מרגש</a>
        <div> מתן ארד</div>
    </div>
  );
}

export default MemoryCell;
