"use client";

import Nav from "@/components/common/nav";
import "../styles/globals.css";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body key={3}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <div className="flex flex-row">{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#6366F1 !important",
          ":hover": {
            backgroundColor: "#4338ca !important",
          },
          color: "white", // Set the text color
          borderRadius: "10px", // Set the border radius
          fontWeight: "medium", // Set the font weight
          "&:hover": {
            backgroundColor: "#4338ca",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "white",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#eee",
            border: "1px #eee solid",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              backgroundColor: "",
              border: "3px #6366F1 solid",
              transition: "0.4s all",
            },
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          input: {
            "&::placeholder": {
              color: "red",
            },
            color: "red", // if you also want to change the color of the input, this is the prop you'd use
          },
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#90caf9",
    },
    common: {
      black: red[300],
      white: red[300],
    },
    secondary: {
      main: "#f48fb1",
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: "#6366f1",
      paper: "#1c2536",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  shape: {
    borderRadius: 9,
  },
});
