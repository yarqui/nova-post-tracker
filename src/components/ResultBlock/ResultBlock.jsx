const ResultBlock = () => {
  const data = [
    { id: 1, name: "First" },
    { id: 3, name: "Second" },
  ];

  return (
    <div>
      <div>
        <p>Статус доставки: {"статус"}</p>
        <p>Відправлено: {"відправлено"}</p>
        <p>Отримано: {"отримано"}</p>
      </div>
      <div>
        <ul>{data && data.map((dep) => <li key={dep.id}>{dep.name}</li>)}</ul>
      </div>
    </div>
  );
};

export default ResultBlock;
