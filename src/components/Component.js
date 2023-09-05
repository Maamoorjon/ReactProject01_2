import "./Component.css";

const Component = ({ color: c = "green" }) => {
  return (
    <div className={`component ${c}`}>
      <h1>Hello Component</h1>
    </div>
  );
};

export default Component;
