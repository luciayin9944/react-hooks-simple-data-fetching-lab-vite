// create your App component here
import { useState, useEffect } from 'react';

const API_URL = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(true)

    function fetchDogImage() {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            setImage(data.message)
            setLoading(false)
        })
        .catch(error => {
        setError(error.message);
        setLoading(false);
      });
    }

    useEffect(() => {
        fetchDogImage();
    }, [])
    

    return (
        <div>
            {loading ? (
                <p>Loading...</p> 
            ) : (
                <img src={image} alt="random dog" width="400" />
            )}
            <button onClick={fetchDogImage}>See a Dog</button>
        </div>
    );
}

export default App;



// import { useState, useEffect } from 'react';

// const API_URL = "https://dog.ceo/api/breeds/image/random"

// function App() {
//     const [image, setImage] = useState(null)
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         fetch(API_URL)
//         .then((response) => response.json())
//         .then((data) => {
//             setImage(data.message)
//             setLoading(false)
//         })
//         .catch((error) => console.error('Error fetching dog image:', error));
//     }, []);


//     const handleClick = () => {
//         setImage(image)
//     }


//     return (
//         <div>
//             <button onClick={handleClick}>See a Dog</button>
//             {loading ? "" : <p>Loading...</p>}
//             <img src={image} alt="random dog" />
//         </div>
//     );
// }

// export default App;