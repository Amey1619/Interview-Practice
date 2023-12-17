import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import "./custom.css";
import axios from "axios";
import Card from "../Cards/Cards";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${value}`
        );
        console.log(response.data.hits);
        setResult(response.data.hits);
      } catch (error) {
        console.log("Errors is fetching data: ", error);
      }
    };
    fetchData();
  }, [value]);

  return (
    <div className="Home">
      <TextField
        variant="outlined"
        color="secondary"
        sx={{width: "45rem", margin: "10px"}}
        placeholder="Search here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />{" "}
              {/* Use the color that fits your design */}
            </InputAdornment>
          )
        }}
      />
      {result &&
        result.map((res) => (
          <Card
            key={res.objectID}
            title={res.title}
            author={res.author}
            url={res.url}
            objectID={res.objectID}
          />
        ))}
    </div>
  );
};

export default Home;
