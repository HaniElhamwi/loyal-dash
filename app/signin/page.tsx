"use client";

import useSignin from "@/hooks/useSignin";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Page() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { errorMessage, loading, setErrorMessage, signin } = useSignin();

  const onSignin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin({ email: userData.email, password: userData.password });
  };
  return (
    <div className="h-screen w-screen pattern">
      <Stack spacing={2} sx={{ width: "100%" }}>
        {errorMessage && (
          <Snackbar
            autoHideDuration={2000}
            open
            onClose={() => setErrorMessage("")}>
            <Alert severity="error" sx={{ width: "100%" }}>
              user information is wrong
            </Alert>
          </Snackbar>
        )}
      </Stack>
      <div className="mx-auto container my-auto h-full w-full flex_center">
        <Card className="min-w-[500px]">
          <CardContent>
            <form onSubmit={onSignin}>
              <div className="flex_center">
                <img
                  src="/images/logo.png"
                  className="w-[140px] h-[140px] "
                  alt=""
                />
              </div>

              <h1 className="mb-4 text-xl font-bold">{t("LOGIN")}</h1>
              <div className="flex gap-2 flex-col">
                <TextField
                  fullWidth
                  placeholder="Email"
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "#333",
                    },
                  }}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  placeholder="Password"
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "#333",
                    },
                  }}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  required
                />
              </div>
              <div className="mt-6">
                <Button
                  size="large"
                  className="w-full"
                  type="submit"
                  disabled={loading}>
                  {!loading ? t("LOGIN") : <CircularProgress />}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Page;
