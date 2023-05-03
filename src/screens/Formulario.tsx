import { TextField, Button } from "@mui/material";
import React from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useParams } from "react-router-dom";
import { users } from "../resources/User.ts";
import { NavLink, Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const { id } = useParams();
  const user = users.find((user) => user.id.toString() === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Nombre"
          defaultValue={user?.name}
          {...register("name", { required: true })}
        />
        {errors.name && <span>Este campo es requerido</span>}
        <TextField
          label="Direccion"
          defaultValue={user?.address}
          {...register("address", { required: true })}
        />
        {errors.address && <span>Este campo es requerido</span>}
        <TextField
          label="Role"
          defaultValue={user?.role}
          {...register("role", { required: true })}
        />
        {errors.role && <span>Este campo es requerido</span>}
        <TextField
          label="Salario"
          defaultValue={user?.salary}
          {...register("salary", { required: true, pattern: /^[0-9]+$/ })}
        />
        {errors.salary?.type === "required" && (
          <span>Este campo es requerido</span>
        )}
        {errors.salary?.type === "pattern" && (
          <span>Este campo debe ser un número entero</span>
        )}
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
      <Link to="/PantallaUsuarios">
        <IconButton
          size="large"
          edge="start"
          aria-label="logo"
          style={{ color: "#47BF95" }}
        >
          <KeyboardReturnIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Formulario;
