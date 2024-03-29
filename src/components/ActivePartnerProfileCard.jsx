import React from "react";
import { usePartnerProfile } from "../contexts/PartnerProfileContext";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Box,
  HStack,
  Avatar,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import PassionsSection from "./PassionsSection";

import PartnerVariableSelection from "./PartnerVariableSelection";

import useDeletePartnerProfile from "../hooks/usePartnerProfileDelete.Hk";

const ActivePartnerProfileCard = () => {
  const { partnerProfile, partnerProfileLoading, partnerProfileError } =
    usePartnerProfile();

  const navigate = useNavigate();

  const handleDelete = useDeletePartnerProfile();

  if (partnerProfileLoading) {
    return (
      <Heading size="lg" mt={5}>
        Loading...
      </Heading>
    );
  }

  if (partnerProfileError) {
    return (
      <Heading size="lg" mt={5} color="black">
        {partnerProfileError}
      </Heading>
    );
  }

  const { id, image, name, relationship, gender, date_of_birth } =
    partnerProfile.activeProfile;

  return (
    <Card borderRadius="0 25px 0 25px" color={"white"}>
      <CardHeader
        borderRadius="0 25px 0 0px"
        bgGradient={"linear(to-l, themeCustom.200, themeCustom.900)"}
      >
        <HStack justifyContent="space-between">
          <Heading mb={5} size="lg">
            Active Partner Profile
          </Heading>
          <Button
            bgGradient="linear(to-l, red.300, themeCustom.900)"
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </HStack>

        <HStack>
          <Avatar name={name} src={image} />
          {name?.length > 7 ? (
            <Heading size="sm">{name.slice(0, 7)}...</Heading>
          ) : (
            <Heading size="sm">{name}</Heading>
          )}
        </HStack>
      </CardHeader>

      <CardBody color="black">
        <HStack justifyContent="space-between">
          <Box>
            <HStack>
              <Heading size="sm">Relationship: </Heading>
              <p>{relationship ? relationship : "No relationship added"}</p>
            </HStack>

            <HStack>
              <Heading size="sm">Gender: </Heading>
              <p>{gender ? gender : "No gender added"}</p>
            </HStack>

            <HStack>
              <Heading size="sm">DOB: </Heading>
              <p>{date_of_birth ? date_of_birth : "No DOB added"}</p>
            </HStack>
          </Box>
          <Box>
            <Button onClick={() => navigate("/partner-profile-edit/")}>
              Edit
            </Button>
          </Box>
        </HStack>

        <Divider
          mt={5}
          borderWidth="5px"
          borderRadius="10"
          borderColor="themeCustom.900"
        />

        <PartnerVariableSelection
          name="likes"
          mapLocation="likes_display"
          endPoint="/partner-likes/"
        />

        <Divider
          mt={5}
          borderWidth="5px"
          borderRadius="10"
          borderColor="themeCustom.900"
        />

        <PartnerVariableSelection
          name="characteristics"
          mapLocation="characteristics_display"
          endPoint="/partner-characteristics/"
        />

        <Divider
          mt={5}
          borderWidth="5px"
          borderRadius="10"
          borderColor="themeCustom.900"
        />

        <PassionsSection />
      </CardBody>
    </Card>
  );
};

export default ActivePartnerProfileCard;
