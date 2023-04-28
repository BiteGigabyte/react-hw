import './App.css';
import { Posts } from "./components/posts1/Posts";
import { useState } from "react";


function App() {
    const [posts] = useState([]);
    const [isVisible, setIsVisible] = useState(true); // додали новий стан

    const toggleVisibility = () => {
        setIsVisible(!isVisible); // інвертуємо стан видимості
    }

    return (
        <div className="App">
            <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button> {/* змінюємо текст кнопки в залежності від стану видимості */}
            {isVisible && <Posts posts={posts} />} {/* показуємо/ховаємо вміст в залежності від стану видимості */}
        </div>
    );
}

export default App;
