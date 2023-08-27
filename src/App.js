import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";
import Item from "./item";
function App() {
  const [flag, setFlag] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchData();
        // console.log(response.status);
        if (response.status) {
          setData(response.content.data);
          setFlag(1);
        } else {
          setFlag(-1);
        }
      } catch (error) {
        setFlag(-1);
      }
    };
    fetch();
  }, []);

  if (flag === 0) {
    return <IsLoading />;
  } else if (flag === 1) {
    return <DisplayItems data={data} />;
  } else return <Failed />;
}

const IsLoading = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <div className="loader"></div>
    <b>Loading...</b>
  </div>
);

const Failed = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <div style={{ width: "200px" }}>
      <img src="failed.jpg" />
    </div>
    <b>Fetching data failed!!!</b>
  </div>
);

const DisplayItems = ({ data }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Tech Conferences around the World!</h2>
      </div>
      <div className="App">
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default App;
