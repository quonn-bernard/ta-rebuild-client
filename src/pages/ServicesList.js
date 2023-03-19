import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, Box } from "@chakra-ui/layout";
import {getAllLabServices} from "../features/services/serviceSlice";

const ServicesList = () => {
  const dispatch = useDispatch();
  const { allServices, isLoading, isError, message } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    try {
      dispatch(getAllLabServices());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Text>Service Template</Text>
      {allServices.length ? (
        allServices.map((svc) => {
          return (
            <Box key={svc._id}>
              <Text>{svc.title}</Text>
            </Box>
          );
        })
      ) : (
        <Text>No services found to display...</Text>
      )}
    </>
  );
};

export default ServicesList;
