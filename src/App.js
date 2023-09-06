import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
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
