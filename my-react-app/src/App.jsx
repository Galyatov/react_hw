import React, { useState } from "react";
import "./App.css";

const emojis = [
    { id: 1, emoji: "😎", votes: 0 },
    { id: 2, emoji: "😢", votes: 0 },
    { id: 3, emoji: "😂", votes: 0 },
    { id: 4, emoji: "😍", votes: 0 },
    { id: 5, emoji: "🤔", votes: 0 },
    { id: 6, emoji: "😡", votes: 0 },
];

function App() {
    const [emojiList, setEmojiList] = useState(emojis);
    const [winner, setWinner] = useState(null);

    const handleVote = (id) => {
        setEmojiList((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, votes: item.votes + 1 } : item
            )
        );
    };

    const handleShowResults = () => {
        const maxVotes = Math.max(...emojiList.map((item) => item.votes));
        const topEmoji = emojiList.find((item) => item.votes === maxVotes);
        setWinner(topEmoji);
    };

    return (
        <div className="container">
            <h1>Vote for your favorite emoji!</h1>
            <div>
                {emojiList.map((item) => (
                    <div key={item.id} className="emoji-container">
                        <span className="emoji" onClick={() => handleVote(item.id)}>
                            {item.emoji}
                        </span>
                        <span>Votes: {item.votes}</span>
                    </div>
                ))}
            </div>
            <button onClick={handleShowResults} className="button">
                Show Results
            </button>
            {winner && (
                <div className="winner">
                    <h2>Winner is:</h2>
                    <span>{winner.emoji}</span>
                    <p>With {winner.votes} votes!</p>
                </div>
            )}
        </div>
    );
}

export default App;
