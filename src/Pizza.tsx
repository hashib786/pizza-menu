const Header = () => {
  return <h1>This is Hashib Header</h1>;
};

const Pizza = () => {
  const styles: React.CSSProperties = {
    backgroundColor: "red",
    padding: "10px",
    color: "white",
  };

  return (
    <>
      <Header />
      <h1 style={styles}>Hello</h1>
    </>
  );
};

export default Pizza;
