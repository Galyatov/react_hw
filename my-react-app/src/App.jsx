import React, { useState } from "react";

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
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <h1>Vote for your favorite emoji!</h1>
            <div>
                {emojiList.map((item) => (
                    <div key={item.id} style={{ margin: "10px" }}>
            <span
                style={{ fontSize: "2rem", marginRight: "10px", cursor: "pointer" }}
                onClick={() => handleVote(item.id)}
            >
              {item.emoji}
            </span>
                        <span>Votes: {item.votes}</span>
                    </div>
                ))}
            </div>
            <button
                onClick={handleShowResults}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    cursor: "pointer",
                }}
            >
                Show Results
            </button>
            {winner && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Winner is:</h2>
                    <span style={{ fontSize: "3rem" }}>{winner.emoji}</span>
                    <p>With {winner.votes} votes!</p>
                </div>
            )}
        </div>
    );
}

export default App;
