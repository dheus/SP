import { useState } from "react";
const RunAwayButton = () => {
    const [state, setState] = useState(1);

    function mouseOver() {
        if (state === 1) {
          setState((prevVal) => (prevVal += 1));
        } else if (state === 2) {
          setState((prevVal) => (prevVal += 1));
        } else if (state === 3) {
          setState((prevVal) => (prevVal -= 2));
        } else if (state === 4) {
          setState((prevVal) => (prevVal -= 3));
        }
      }
    
      var mystyle = {
        left:
          state === 1 ? "30%" : state === 2 ? "350px" : state === 3 ? "550px" : state === 4 ? "850px" : "",
        top: 
          state === 1 ? "200px" : state === 2 ? "20px" : state === 3 ? "200px" : state === 4 ? "-150px": "",
      };
    return (
        <div className="btn-container">
            <button
                type="submit"
                className="btn "
                onMouseOver={mouseOver}
                style={mystyle}
            >
              Pyydä rahaa huonon suomenkielisen esityksen kuuntelemisesta

            </button>
        </div>

    )
}
export default RunAwayButton