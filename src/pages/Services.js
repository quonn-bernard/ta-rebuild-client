import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Text, Box } from "@chakra-ui/layout";
import { getLabServiceBySlug } from "../features/services/serviceSlice";

const Service = () => {
  const dispatch = useDispatch();
  const { currentService, isLoading, isError, message } = useSelector(
    (state) => state.services
  );
  const { slug } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    try {
      dispatch(getLabServiceBySlug(slug));
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, isError, message, slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {currentService.length ? (
        currentService.map((svc) => {
          return (
            <Box key={svc._id}>
              <Text>{svc.title}</Text>
              <Text>{svc.serviceDescription}</Text>
            </Box>
          );
        })
      ) : (
        <Text>No services found to display...</Text>
      )}
    </>
  );
};

export default Service;
