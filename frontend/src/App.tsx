import { useState, useEffect } from "react";

const API_URL = `http://localhost:${process.env.REACT_APP_API_PORT}/api`;

function App() {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        fetch(`${API_URL}/hello`)
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => setMessage("Error. Could not connect to server."));
    }, []);

    return <>{message}</>;
}

export default App;
