import focusData from "../../assets/Data/focusData.json";
// console.log(focusData[0]["company"].comp2);

const Focus = () => {
  return (
    <div id="focus" className="focus__container">
      {/* page heading */}
      <h1 className="focus__heading">OUR MARKET FOCUS</h1>
      {/* page unordered list heading */}
      <div className="focus__ul_head">
        {/* page unordered list items */}
        {focusData.map((focus, i) => (
          <ul className="focus__ul" key={i}>
            {/* list heading */}
            <h2 className="focus__header">{focus.focusArea}</h2>
            {/* the lists */}
            <span className="focus__list">
              {focus.company.comp1 ? <li>{focus.company.comp1}</li> : ""}
              {focus.company.comp2 ? <li>{focus.company.comp2}</li> : ""}
              {focus.company.comp3 ? <li>{focus.company.comp3}</li> : ""}
              {focus.company.comp4 ? <li>{focus.company.comp4}</li> : ""}
              {focus.company.comp5 ? <li>{focus.company.comp5}</li> : ""}
              {focus.company.comp6 ? <li>{focus.company.comp6}</li> : ""}
              {focus.company.comp7 ? <li>{focus.company.comp7}</li> : ""}
            </span>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Focus;
