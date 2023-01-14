import latestProdData from "../data/latest";

const LatestProdFunc = latestProdData.map((el) => {
  return (
    <div className="d-flex border rounded-5 gap-5 p-4">
      <img src={el.image}></img>
      <div className="latest-rightside">
        <a>{el.date}</a>
        <h4>{el.title}</h4>
        {el.text}
        <p>{el.by}</p>
      </div>
    </div>
  );
});

export default LatestProdFunc;
