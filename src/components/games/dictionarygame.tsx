import { PathCharacter } from "../../data/data";
import { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Button, Card } from "@mui/material";

type DictionaryGameProps = {
    chars: PathCharacter[], onGameOver: any
}

function DictionaryGame({chars, onGameOver}: DictionaryGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentCharacter = chars[currentIndex];
    const canMovePrevious = currentIndex > 0;
    const canMoveNext = currentIndex < chars.length;

    function movePrevious() {
        setCurrentIndex(Math.max(currentIndex - 1, 0));
    }

    function moveNext() {
        setCurrentIndex(Math.min(currentIndex + 1, chars.length));
    }

    return (
        <>
            { canMovePrevious && <Button color="primary" aria-label="previous" startIcon={<ArrowBack />} onClick={movePrevious} /> }
            <Card>{currentCharacter.english}</Card>
            <Card>{currentCharacter.hiragana}</Card>
            <p>{currentCharacter.phonetic} - {currentCharacter.description}</p>
            { canMoveNext && <Button color="primary" aria-label="previous" startIcon={<ArrowForward />} onClick={moveNext} /> }

            <button onClick={onGameOver}>Game Over</button>
        </>
    );
}

export default DictionaryGame;
