import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControllerView from "./Controller-UI/ControllerView.jsx";
import MainView from "./Main-UI/MainView.jsx";

function App() {
    const [page, setPage] = useState(window.location.hash)

    useEffect(() => {
        const handleHashChange = () => setPage(window.location.hash)
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    if (page === '#controller') {
        return <ControllerView />
    }

    return <MainView />
}

export default App
