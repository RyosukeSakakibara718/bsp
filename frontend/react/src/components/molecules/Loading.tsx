import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#eee2ff"
        ariaLabel="grid-loading"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loading;
