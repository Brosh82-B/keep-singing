import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import MainForm from "./components/MainForm/MainForm";
import MemoryCell from "./components/MemoryCell/MemoryCell";
import Card from "./components/Card";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./components/Carroussel";
function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
          text="מוקדש לי"
          songName="השיר שלי"
          songLink="https://www.youtube.com/watch?v=V9hav4QPSeU"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card image="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];
  return (
    <div className="App">
      <AppHeader />
      {/* <div className="main">{ <MainForm /> <MemoryCell />}</div> */}
      <div className="">
        <Carroussel
          cards={cards}
          height="80vh"
          width="30%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
