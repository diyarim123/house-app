export default function Residencies() {
  return (
    <div className="pt-9">
      <div className="d-flex justify-between items-end">
        <div>
          <p className="text-xl font-semibold pb-1">Best Choices</p>
          <p className="text-2xl font-bold text-primary">Popular Residencies</p>
        </div>
        <div className="d-flex gap-3">
          <span className="arrow-prev">
            <i className="fa-solid fa-angle-left" style={{color : "#ff701a"}}></i>
          </span>
          <span  className="arrow-next">
            <i className="fa-solid fa-angle-right" style={{color : "#ff701a"}}></i>
          </span>
        </div>
      </div>
    </div>
  )
}
