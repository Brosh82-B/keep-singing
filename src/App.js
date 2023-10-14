import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import CenteredCarousel from "./components/CenteredCarousel";
import MainForm from "./components/MainForm/MainForm";
import CloudinaryUploader from "./components/CloudinaryUploader";
import plusIcon from "./img/plus.svg";
function App() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <img
          src={plusIcon}
          alt="X"
          className="plus-button"
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={() => {
            if (formIsOpen) {
              setRotation(0);
              setFormIsOpen(false);
            } else {
              setRotation(45);
              setFormIsOpen(true);
            }
          }}
        ></img>

        <div>
          <h2 style={{ textAlign: "center" }}>מוכרחים להמשיך לנגן</h2>
          <p style={{ marginTop: "-3%" }}>אֱמֹר מְעַט וַעֲשֵׂה הַרְבֵּה</p>
        </div>
      </div>

      <div className="how-are-we">
        {`ברוכים הבאים למוכרחים להמשיך לנגן, מטרת העמוד היא ליצור פלטפורמה לשיתוף רגשות ותחושות, לנצור אנשים ואת התקופה בעזרת הכוח שבמילים ובמנגינה מאחוריהן
אם תרצו מוזמנים לשתף אותנו בשיר שמתקשר לכם לרוח התקופה, אדם שאתם רוצים לנצור או מקרה מסוים ליצירת אווירת שיתוף ואחווה.
בשביל להקשיב לשיר לחצו על הלחצן עם השם וזה יעביר אתכם ליוטיוב להשמעה :)
מאיתנו צוערי פלוגה ב' מתן ארד וברק פישר. `}
      </div>
      {formIsOpen ? (
        <MainForm setFormIsOpen={setFormIsOpen} />
      ) : (
        <CenteredCarousel />
      )}
    </div>
  );
}

export default App;
