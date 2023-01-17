import latestProdData from "../../data/latest";

const LatestProdFunc = latestProdData.map((el, index) => {
  return (
    <div className="d-flex border rounded-5 gap-5 p-4" key={index}>
      <img src={el.image}></img>
      <div className="latest-rightside">
        <a className="more-link border rounded-5 py-2 px-3">{el.date}</a>
        <h1 className="section-title my-3 ">{el.title}</h1>
        <p>{el.text}</p>
        <br/>
        <br/>
        <br/>
        <p>{el.by}</p>
      </div>
    </div>
  );
});

export default LatestProdFunc;
