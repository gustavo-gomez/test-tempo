import React, { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Lock } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ResponsiveLoginPage() {
  const [screenSize, setScreenSize] = useState("desktop");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Handle form submission logic here
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-100 p-4 ${
        screenSize === "mobile" ? "py-8" : "py-12"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-md ${
          screenSize === "mobile"
            ? "w-full"
            : screenSize === "tablet"
            ? "w-2/3"
            : "w-1/3"
        }`}
      >
        <div className="p-8">
          <h2
            className={`text-center font-bold mb-6 ${
              screenSize === "mobile" ? "text-2xl" : "text-3xl"
            }`}
          >
            Login
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          className={`pl-10 ${
                            screenSize === "mobile" ? "text-lg" : "text-base"
                          }`}
                          placeholder="Enter your username"
                        />
                        <User
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="password"
                          className={`pl-10 ${
                            screenSize === "mobile" ? "text-lg" : "text-base"
                          }`}
                          placeholder="Enter your password"
                        />
                        <Lock
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className={`w-full ${
                  screenSize === "mobile" ? "text-lg py-3" : "text-base py-2"
                }`}
              >
                Log In
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
