import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Мінімум 2 симовли")
    .max(50, "Максимум 50 символів")
    .required("Дане поле обов'язкове"),
  phone: yup
    .string()
    .required("Дане поле обов'язкове")
    .length(10, "Поле повинно містити 10 символів")
    .test("phoneCorrect", "Некоректний формат номера", (value) => {
      if (!value) return false;

      return value[0] === "0" && value.replace(/\D[^\.]/g, "").length > 0
        ? true
        : false;
    }),
  email: yup
    .string()
    .email("Введіть коректну адресу електронної пошти")
    .required("Дане поле обов'язкове"),
  message: yup
    .string()
    .min(8, "Мінімум 20 символів")
    .max(1000, "Максимум 1000 символів")
    .required("Дане поле обов'язкове"),
});

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      //ToDo: create handler
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ marginBottom: "3rem" }}>
        <Stack spacing={2}>
          <TextField
            id="name"
            name="name"
            label="Ваше ім'я"
            variant="standard"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            id="phone"
            label="Номер телeфону"
            variant="standard"
            placeholder="0XX-XXX-XX-XX"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="message"
            name="message"
            label="Повідомлення"
            variant="standard"
            multiline
            maxRows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Stack>
      </div>
      <Button
        fullWidth
        style={{
          background: "#b59c10",
          fontWeight: 700,
        }}
        variant="contained"
        type="submit"
      >
        Надіслати
      </Button>
    </form>
  );
}
