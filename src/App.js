import * as Styles from "./App.styles";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const controls = [
    { type: "number", value: "7" },
    { type: "number", value: "8" },
    { type: "number", value: "9" },
    { type: "operator", value: "+" },
    { type: "number", value: "4" },
    { type: "number", value: "5" },
    { type: "number", value: "6" },
    { type: "operator", value: "-" },
    { type: "number", value: "1" },
    { type: "number", value: "2" },
    { type: "number", value: "3" },
    { type: "operator", value: "x" },
    { type: "number", value: "0" },
    { type: "number", value: "000" },
    { type: "number", value: "." },
    { type: "operator", value: "/" },
    { type: "operator", value: "AC" },
    { type: "operator", value: "DEL" },
    { type: "none" },
    { type: "equal", value: "=" },
  ];

  const [number, setNumber] = useState("0");
  const [operator, setOperator] = useState(null);
  const prevNumberRef = useRef(null);

  useEffect(() => {
    document.title = "Calculator";
  }, []);

  function handleControlClick(item) {
    switch (item.type) {
      case "number": {
        if (number === "0" && item.value !== ".") {
          if (item.value !== "000") {
            setNumber(item.value);
          }
          break;
        }

        if (item.value === ".") {
          if (number.indexOf(item.value) < 0) {
            setNumber(number + ".");
          }
          break;
        }

        setNumber(number + item.value);
        break;
      }
      case "operator": {
        switch (item.value) {
          case "AC": {
            setNumber("0");
            setOperator(null);
            prevNumberRef.current = null;
            break;
          }
          case "DEL": {
            if (number.length === 1) {
              setNumber("0");
              break;
            }

            setNumber(number.substr(0, number.length - 1));
            break;
          }
          default: {
            setOperator(item.value);
            prevNumberRef.current = number;
            setNumber("0");
          }
        }
        break;
      }
      case "equal": {
        if (operator && prevNumberRef.current) {
          const s1 = parseFloat(prevNumberRef.current, 10);
          const s2 = parseFloat(number, 10);
          prevNumberRef.current = null;

          switch (operator) {
            case "+": {
              setNumber((s1 + s2).toString());
              setOperator(null);
              break;
            }
            case "-": {
              setNumber((s1 - s2).toString());
              setOperator(null);
              break;
            }
            case "x": {
              setNumber((s1 * s2).toString());
              setOperator(null);
              break;
            }
            case "/": {
              if (s2 === 0) {
                alert("Cannot be divided by 0, please enter another number.");
                break;
              }

              setNumber((s1 / s2).toString());
              setOperator(null);
              break;
            }
            default: {
              break;
            }
          }
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <>
      <Styles.GlobalStyle />
      <Styles.Box>
        <Styles.Result>
          <span>{number}</span>
        </Styles.Result>
        <div>
          <Styles.Controls>
            {controls.map((item, index) => (
              <Styles.ControlItem key={index}>
                <Styles.StyledButton
                  onClick={() => handleControlClick(item)}
                  type={item.type}
                >
                  {item.value}
                </Styles.StyledButton>
              </Styles.ControlItem>
            ))}
          </Styles.Controls>
        </div>
      </Styles.Box>
    </>
  );
}
