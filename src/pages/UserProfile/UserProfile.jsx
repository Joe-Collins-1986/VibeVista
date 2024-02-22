import React from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import useUserProfileHook from "../../hooks/useUserProfileHk";

import UserProfileCard from "../../components/UserProfileCard";
import { Box } from "@chakra-ui/react";

const UserProfile = () => {
  const { currentUser } = useCurrentUser();
  const id = currentUser?.pk;
  const { userProfile, error, loaded } = useUserProfileHook(id);

  return (
    <Box p={5} aria-label="User Profile Card">
      {loaded ? (
        userProfile ? (
          <UserProfileCard {...userProfile} main />
        ) : (
          <h1>User profile not found</h1>
        )
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default UserProfile;
