import React, { useState } from "react";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from "@mantine/core";
import { useLoginMutation } from "../../Feature/API/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../Feature/Service/authSlice";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(660),
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(660),
    maxWidth: rem(450),
    paddingTop: rem(80),
    backgroundColor: "#3f4245",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const [email,setEmail]=useState("tth@gmail.com");
  const [password,setPassword]=useState("11223344");
  const [login]=useLoginMutation();
  const nav=useNavigate();

  const dispatch=useDispatch();


  const loginHandler=async(e)=>{
    e.preventDefault();
    // console.log([email,password]);
    // tth@gmail.com 11223344
    try{
        const user={email,password};
        const {data}=await login(user);
        console.log(data);
        dispatch(addUser({user:data?.user.email,token:data?.token}));
        if (data?.message ==="Login successfully"){
            nav("/")
        }
    }catch(error){
        console.log(error);
    }
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to MMS POS!
        </Title>

        <TextInput
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
          label="Email address"
          placeholder="yourname@gmail.com"
          size="md"
        />
        <PasswordInput
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button onClick={loginHandler} fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Forget Password?{" "}
          <Anchor
            href="#"
            weight={700}
            onClick={(event) => event.preventDefault()}
          >
            Get Help to change password
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Login;
