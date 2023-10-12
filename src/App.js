import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Loading from "./components/Loading/Loading";
import Card from "./components/Card";

function App() {
  const [cardsList, setCardsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxarKoxOW1GBMVZV5Fu9NtLorAcpcNaFSGRgNV5_j3friPb5MyK9JZ9OPJ7E7524yO8/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        let tempList = [];
        data.forEach((element) => {
          let tempContent = (
            <Card
              image={element.Image}
              text={element.Text}
              songName={element["Song Name"]}
              songLink={element["Song Link"]}
              Title={element.Title}
              Poster={element.Poster}
            />
          );
          tempList.push({
            key: uuidv4(),
            content: tempContent,
          });
        });
        setCardsList(tempList);
      });
  }, []);
  useEffect(() => {
    if (cardsList.length > 0) {
      console.log(cardsList);
      setLoading(false);
    }
  }, [cardsList]);
  return (
    <div className="App">
      {/* <AppHeader /> */}
      {/* <div className="main">{ <MainForm /> <MemoryCell />}</div> */}
      <div className="">
        {!loading ? (
          cardsList.map((element) => {
            return element.content;
          })
        ) : (
          <Loading />
        )}
      </div>
      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
