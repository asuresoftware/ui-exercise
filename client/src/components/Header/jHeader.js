import "./styleHeader.css";

function TacoHeader() {
  //basic header component for our website to let our audience know what we are all about
  return (
    <div id="header_div">
      <h1>TACO LOCO</h1>
      <p id="header_subtext">
        <i>
          Finding <b>crazy-tasty</b> tacos near you
        </i>
      </p>
    </div>
  );
}

export default TacoHeader;
