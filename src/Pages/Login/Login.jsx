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
import { toast } from "react-toastify";

const useStyles = createStyles((theme) => ({
  text: {
    color: "#3F4245",
  },
  wrapper: {
    minHeight: rem(660),
    backgroundSize: "fit",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 20% top 50%",
    backgroundImage:
      "url(https://img.freepik.com/free-vector/self-checkout-concept-illustration_114360-2331.jpg)",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(660),
    maxWidth: rem(500),
    paddingTop: rem(90),
    backgroundColor: "#f5f5f5",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },
  button: {
    ":hover": {
      background: "#3F4245",
      color: "#f5f5f5",
    },
    color: "#3F4245",
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const [email, setEmail] = useState("tth@gmail.com");
  const [password, setPassword] = useState("11223344");
  const [login] = useLoginMutation();
  const nav = useNavigate();

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    // console.log([email,password]);
    // tth@gmail.com 11223344
    try {
      const user = { email, password };
      const { data } = await login(user);
      console.log(data);
      dispatch(addUser({ user: data?.user?.email, token: data?.token }));

      if (data === undefined) {
        toast.error("Please enter a valid email !", {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
          theme: "dark",
        });
        nav("/login");
      } else {
        if (data?.message === "Login successfully") {
          toast.success("Login Successfully !", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,

            hideProgressBar: true,
            theme: "dark",
          });
          nav("/");
        } else if (data?.message === "Username or password wrong") {
          toast.error("Either the email or the pasword is wrong !", {
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
            autoClose: 2000,
            theme: "dark",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.text} ta="center" mt="md" mb={50}>
          Welcome back to MMS POS!
        </Title>

        <TextInput
          className={classes.text}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email address"
          placeholder="yourname@gmail.com"
          size="md"
        />
        <PasswordInput
          className={classes.text}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox
          className={classes.text}
          label="Keep me logged in"
          mt="xl"
          size="md"
        />
        <Button
          className={classes.button}
          onClick={loginHandler}
          fullWidth
          mt="xl"
          size="md"
        >
          Login
        </Button>

        <Text className={classes.text} ta="center" mt="md">
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
