import Link from "next/link";

const Footer = () => {
  const ITEMS = [
    {
      img: <i class="fa-brands fa-github"></i>,
      url: "https://github.com/Taro-ous18",
    },
    {
      img: <i class="fa-brands fa-linkedin"></i>,
      url: "https://www.linkedin.com/in/%E5%A4%AA%E9%83%8E-%E5%90%89%E9%87%8E-15b553249/",
    },
    {
      img: <i class="fa-brands fa-facebook"></i>,
      url: "https://facebook.com",
    },
  ];

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
          padding: "3rem 5rem",
        }}
      >
        <h4>Taro Yoshino 2023</h4>
        <div>
          <ul
            style={{
              display: "flex",
              color: "white",
              listStyle: "none",
              marginRight: "1rem",
            }}
            className="footer-sns"
          >
            {ITEMS.map((item) => {
              return (
                <Link style={{width: "100%"}} href={item.url}>{item.img}</Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export { Footer };
