export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <OkCancelButtons />
      <OkCancelButtons />
    </>
  );
}

const Button = ({ title }) => {
  return <button className="btn">{title}</button>;
};

const OkCancelButtons = () => {
  return (
    <>
      <Button title="OK" />
      <Button title="Cancel" />
    </>
  );
};
