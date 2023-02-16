import "./App.css";

import Card from "./components/Card";
import Header from "./components/Header";
import Section from "./components/Section";
import { developerData } from "./data.js";
import { clientData } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <Section
        heading={"Our Developers"}
        child={
          <>
            {developerData.map((item) => {
              return (
                <>
                  <Card
                    fullname={item.fullname}
                    aboutme={item.aboutme}
                    customClass={item.customClass}
                    source={item.source}
                  />
                </>
              );
            })}
          </>
        }
      />
      <Section
        heading={"Our Clients"}
        child={
          <>
            {clientData.map((item) => {
              return (
                <>
                  <Card
                    fullname={item.fullname}
                    aboutme={item.aboutme}
                    customClass={item.customClass}
                    source={item.source}
                  />
                </>
              );
            })}
          </>
        }
      />
    </div>
  );
}

export default App;
