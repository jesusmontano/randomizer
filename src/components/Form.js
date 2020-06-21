import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emoji: '🤔'
        };
    };

    generateEmoji(previousEmoji) {
        const emojis = ['👍', '🥺', '👎', '🤗', '😞', '😛'];

        const selectedEmoji = emojis[Math.floor(Math.random() * emojis.length)];

        if (previousEmoji === selectedEmoji) {
            return this.generateEmoji(previousEmoji);
        };

        this.setState({emoji: selectedEmoji});
    }

    render() {
        return (
            <div className="centered">
                <header>PATY'S LIFE DETERMINANT ❓❓❓</header>
                <p className="emoji-large">{this.state.emoji}</p>
                <button onClick={() => this.generateEmoji(this.state.emoji)}>❓❓❓❓❓</button>
            </div>
        )
    }
}