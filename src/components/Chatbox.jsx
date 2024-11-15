import React, { useState } from "react";
import "./Chatbox.css";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      // Simulating a response from the assistant
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "This is a response from the assistant!",
            sender: "assistant",
          },
        ]);
      }, 1000);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.sender === "user" ? "user" : "assistant"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button
          onClick={handleSendMessage}
          className="send-button btn btn-dark"
        >
          <img src="./send.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
