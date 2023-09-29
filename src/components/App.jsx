import React from "react";
import Emoji from "./emoji";
import emojipedia from "../emojipedia";

function createCard(emojiterm) {
  return (
    <Emoji
      key={emojiterm.id}
      emo={emojiterm.emoji}
      title={emojiterm.name}
      description={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
