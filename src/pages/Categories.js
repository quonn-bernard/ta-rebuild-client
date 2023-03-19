import { useEffect } from "react";
import { Text } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {getServicesByCategoryWSlug} from "../features/categories/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { services, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );

  const { slug } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    try {
      dispatch(getServicesByCategoryWSlug(slug));
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, isError, message, slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleClick = (slug) => {
    navigate(`/services/${slug}`)
  }

  return (
    <>
      <Text>{slug}</Text>
      {services.length ? (
        services.map((svc) => {
          return (
            <Text onClick={() => handleClick(svc.slug)} key={svc._id}>
              {svc.title}
            </Text>
          );
        })
      ) : (
        <Text>No services found to display...</Text>
      )}
    </>
  );
};

export default Categories;
