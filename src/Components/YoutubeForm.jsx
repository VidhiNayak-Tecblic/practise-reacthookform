import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Form, useForm } from "react-hook-form";

function YoutubeForm() {
  const { register, control,handleSubmit } = useForm();
  
  const onSubmit =(data,e) => {
      console.log('data,e==>',data,e);
  }

  return (
    <Box backgroundColor={"black"} textColor={"white"}>
      YoutubeForm
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Username</FormLabel>
        <Input type="text" {...register("username")} />
        <FormLabel>Email</FormLabel>
        <Input type="email" {...register("email")} />

        <FormLabel>Password</FormLabel>
        <Input type="password" {...register("password")} />

        <Button>Submit</Button>
      </Form>
    </Box>
  );
}

export default YoutubeForm;
