"use client";

import { SearchBar } from "../shared/components/SearchBar";

interface ContactSearchProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

export function ContactSearch(props: ContactSearchProps) {
  return (
    <SearchBar
      {...props}
      placeholder={props.placeholder ?? "Search contacts..."}
    />
  );
}