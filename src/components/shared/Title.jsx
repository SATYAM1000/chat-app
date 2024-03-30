import { Helmet } from "react-helmet-async";
const Title = ({
  title = "Chat",
  description = "This is a chat application",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
