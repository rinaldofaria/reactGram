import "./Message.css";

const Message = ({ msg, type }) => {
  return (
    <div className={`message ${type}`}>
      <ul>
        {Array.isArray(msg) &&
          msg.map((error) => <li key={error}>* {error}</li>)}
        {!Array.isArray(msg) && <p>{msg}</p>}
      </ul>
    </div>
  );
};

export default Message;
