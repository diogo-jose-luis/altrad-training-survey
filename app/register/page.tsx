"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema matching your API validations
const registrationSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters long"),
  name: z.string().min(5, "Name must be at least 5 characters long"),
});

// Infer the form data type from the Zod schema
type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("User registered successfully:", result);
      // Optionally, redirect or display a success message here

    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" {...register("name")} />
        {errors.name && (
          <p style={{ color: "red" }}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
