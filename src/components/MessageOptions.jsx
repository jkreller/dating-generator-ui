import Message from "../components/Message";

function MessageOptions({ options, onSelect }) {
    return (
      <div>
        <h2>Select a message:</h2>
        {options.map((option, index) => (
          <Message key={index} onClick={() => onSelect(option)}>{option}</Message>
        ))}
      </div>
    );
}

export default MessageOptions;