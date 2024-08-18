export default function Header() {
  return (
    <div className="header">
      {/* Left Side */}
      <div>
        <h1 className="header-text">Discover <span className="d-block">Most Suitable</span> Property</h1>
        <p className="text-lightgrey pt-9">
          Find a variety of properties that suit you very easilty
          Forget 
          <span className="d-block"> all difficulties in finding a residence for you </span>
        </p>

        <div className="d-flex flex-wrap gap-3 pt-10 mb-9 mr-auto ml-auto">
          <div>
            <h2>4,000 <span className="text-2xl text-primary">+</span></h2>
            <p>Premium Product</p>
          </div>
          <div>
            <h2>1,500 <span className="text-2xl text-primary">+</span></h2>
            <p>Happy Customer</p>
          </div>
          <div>
            <h2>13 <span className="text-2xl text-primary">+</span></h2>
            <p>Awards Winning</p>
          </div>
        </div>
      </div>

      {/* right Side */}
      <div className="mr-auto ml-auto mt-auto mb-auto">
        <img src="/house.jpg" alt="House" className="top-img" />
      </div>
    </div>
  );
}
