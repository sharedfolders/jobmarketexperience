export default function Upgrade({ name, cost, appPerClick, appPerSecs }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h4>{name}</h4>
      <p>{cost}</p>
      {appPerClick ? <p>{`Add ${appPerClick} application per click`}</p> : ""}
      {appPerSecs ? <p>{`Add ${appPerSecs} application per click`}</p> : ""}
    </div>
  );
}
