import type { ReactNode } from "react";

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  options: DropdownOption[];
  value?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  onChange?: (value: string) => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}