import Navbar from "../Navbar/Navbar";

const DefaultLayout = (Component) => {
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };
};

export default DefaultLayout;
