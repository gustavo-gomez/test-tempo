import React, { FC } from "react";

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;
export const Form: FC<FormProps> = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);

export const FormControl: FC = ({ children }) => (
  <div className="mb-3">{children}</div>
);

export const FormField: FC = ({ children }) => (
  <div className="flex flex-col mb-4">{children}</div>
);

export const FormItem: FC = ({ children }) => (
  <div className="mb-2">{children}</div>
);

type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export const FormLabel: FC<FormLabelProps> = ({ children, ...props }) => (
  <label {...props} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);

export const FormMessage: FC = ({ children }) => (
  <p className="mt-2 text-sm text-red-600">{children}</p>
);

// Exporting all form components
