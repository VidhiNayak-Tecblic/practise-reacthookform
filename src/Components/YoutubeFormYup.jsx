import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'; 

/*here we are integrated yup with react hookform for validation purpose */

function YoutubeFormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data==>", data);
  };
  return (
    <Box>
      <Heading>Youtube Form integrated yup</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Enter Username"
            {...register("Username", {
              required: "Username is required",
            })}
          />
          <Text color={"darkmagenta"} fontWeight={"bold"}>
            {errors.Username?.message}
          </Text>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email Format",
              },
            })}
          />
          <Text color={"darkmagenta"} fontWeight={"bold"}>
            {errors.Email?.message}
          </Text>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter password"
            {...register("Password", {
              required: "Password is required",
            })}
          />
          <Text color={"darkmagenta"} fontWeight={"bold"}>
            {errors.Password?.message}
          </Text>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default YoutubeFormYup;
