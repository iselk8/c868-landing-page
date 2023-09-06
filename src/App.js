import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Hey There Night Owl!"
        description="Download the WGU term tracker to stay on top of deadlines for terms, courses and assessments."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Search through all your entries without wasting time!"
        description="Experience smooth search feature to retrieve the entry you are looking for faster!"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <Download />
      <div className="my-2 z-10 px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/ismail-el-khattab/"
            target="_blank"
          >
            <span className="bold hover:cursor-pointer hover:underline">
              Ismail El Khattab
            </span>
          </a>{" "}
          <span> @ WGU</span>
        </p>
      </div>
    </>
  );
};

export default App;
