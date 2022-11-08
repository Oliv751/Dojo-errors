/* eslint-disable react/prop-types */
import "./Counter.css";

function Counter({ count, setCount, setMessage }) {
  function isZero(num) {
    return num <= 0;
  }

  const handleClick = () => {
    setMessage("");
    setCount((oldCount) => oldCount + 1);
  };

  const handleClickDown = () => {
    if (isZero(count)) {
      setCount(0);
      setMessage("Vous ne pouvez pas allez sous zéro");
    } else {
      setCount((oldCount) => oldCount - 1);
      setMessage("");
    }
  };

  return (
    <p className="buttons">
      <button className="btn" type="button" onClick={handleClick}>
        Incrémenter ↑ {count}
      </button>

      <button className="btn" type="button" onClick={handleClickDown}>
        Décrémenter ↓ {count}
      </button>
    </p>
  );
}

export default Counter;
