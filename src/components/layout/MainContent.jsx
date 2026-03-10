const MainContent = ({ children }) => {
  return (
    <main className="section has-background-black" style={{ flex: 1 }}>
      {children}
    </main>
  );
};

export default MainContent;
