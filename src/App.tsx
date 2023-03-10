import React from 'react';
import './App.css';
import TitlePage from './components/pages/titlepage';
import ModePage from './components/pages/modepage';
import Layout from './components/layout';
import { useState, Fragment } from 'react';
import { PathContext } from './context/PathContext';
import {Paths } from './data/data'
import GamesPage from './components/pages/gamespage';


type Pages = "title" | "mode" | "game";

export default function App() {
	const [page, setPage] = useState("title"); // todo use a reducer for this
    const [path, setPath] = useState(Paths[0]);
    const pathValue = { path, setPath };

	function startGuestMode() {
		setPage("mode");
	}

    function enterGamesPage() {
        setPage("game");
    }

    let body:React.ReactNode = null;
    let title: string = "Kanapuro";
    switch (page) {
		case "mode":
			body = <ModePage enterGamesPage={enterGamesPage} />
            title = "Choose learning mode";
            break;
        case "game":
            body = <>
                <GamesPage />
            </>;
            title = path.button_text;
            break;
		case "title":
		default:
			body = <TitlePage handleClick={startGuestMode} />
            break;
	};
    return (
        <PathContext.Provider value={pathValue}>
            <Layout subtitle={title}>
                {body}
            </Layout>
        </PathContext.Provider>
    )

}
