import "./App.css";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandTiktok
} from "@tabler/icons-react";

function App() {
  return (
    <>
      <main className="container">
        <div className="container-social">
          <a
            href="https://t.me/+Q7bDD2HZXnUyZTRh"
            target="_blank"
            className="button"
          >
            <picture className="picture-icon">
              <IconBrandTelegram className="icon" size={35} />
            </picture>
            <span className="title-social">Telegram</span>
          </a>
          <a
            href="https://www.instagram.com/ctrl.dev_"
            target="_blank"
            className="button"
          >
            <picture className="picture-icon">
              <IconBrandInstagram className="icon" size={35} />
            </picture>
            <span className="title-social">Instagram</span>
          </a>
          <a
            href="https://vm.tiktok.com/ZMMFoq253/"
            target="_blank"
            className="button"
          >
            <picture className="picture-icon">
              <IconBrandTiktok className="icon" size={35} />
            </picture>
            <span className="title-social">Tiktok</span>
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
