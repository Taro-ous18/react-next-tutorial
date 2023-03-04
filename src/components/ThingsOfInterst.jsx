const ThingsOfInterst = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffe066",
        padding: "3rem 3rem",
        fontWeight: 600,
        fontSize: "1.3rem",
      }}
    >
      <h2 style={{ fontSize: "2rem", color: "#005689", textShadow: "-1.5px 1.5px #fff"}}>
        勉強中・興味のあること
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="interest-container"
          style={{ backgroundColor: "#fff", width: "50%", marginRight: "20px" }}
        >
          <ul className="thingsInterestedIn">
            <li>PHP/Laravel</li>
            <li>Javascript/React</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div
          className="interest-container"
          style={{ backgroundColor: "#fff", width: "50%" }}
        >
          <ul className="thingsInterestedIn">
            <li>UI/UX Design</li>
            <li>英語</li>
            <li>などなど</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ThingsOfInterst };
