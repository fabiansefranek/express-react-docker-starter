import { useState, useEffect } from "react";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;

function App() {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        fetch(`${BACKEND_URL}/api/hello`)
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => setMessage("Error. Could not connect to server."));
    }, []);

    return <>{message}</>;
}

export default App;
