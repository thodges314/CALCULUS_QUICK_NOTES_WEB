import "./LoadingPage.css";

const LoadingPage = () => (
  <div className="loading-animation">
    <img
      height="432"
      width="768"
      src={`${process.env.PUBLIC_URL}/img/newStyleLoadingLoop.gif`}
      alt="Loading Animation"
    />
  </div>
);

export default LoadingPage;
