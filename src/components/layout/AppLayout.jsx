import Title from "../shared/Title";
import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title
          title="Chat Application"
          description="This is chat application"
        />
        <Header />
        <WrappedComponent {...props} />
        <div>Footer</div>
      </>
    );
  };
};

export default AppLayout;
