function CheckStatus({ text, isDone }) {
  let status = isDone ? "is success" : "is processing";
  let setColor = isDone ? "text-success" : "text-error  ";
  
  return (
    <div className={setColor}>
      {text}{" "}
      <span>{status}</span>
    </div>
  );
}

export default CheckStatus;
