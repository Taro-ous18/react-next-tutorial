import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          margin: "0 auto",
          backgroundColor: "#272932",
          height: "80px"
        }}
      >
        <h1 className="header-name">Taro Yoshino</h1>
        <div>
          <Link href="/about" className="link about">
            About
          </Link>
          <Link href="/projects" className="link projects">
            Projects
          </Link>
          <Link href="/sns" className="link sns">
            SNS
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Header };
