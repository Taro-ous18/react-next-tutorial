const Footer = () => {
  return (
    <>
      <div
        style={{
          width: "83%",
          margin: "0 auto",
          backgroundColor: "#272932",
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          alignItems: "center",
          padding: "3rem 5rem"
        }}
      >
        <h4>Taro Yoshino 2023</h4>
        <div>
          <ul
            style={{ display: "flex", color: "white", listStyle: "none", marginRight: "1rem" }}
            className="footer-sns"
          >
            <li style={{ marginRight: "1rem", }}>
              1<img src="" alt="" />
            </li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Footer };
