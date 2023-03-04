import Link from "next/link";

const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "83%",
          margin: "0 auto",
          backgroundColor: "#272932",
          height: "4rem",
          position: "sticky",
          top: "0",
          padding: "2.5rem"
        }}
      >
        <Link href="/" className="header-name">Taro Yoshino</Link>
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
    </>
  );
};

export { Header };
