"use client";

import { SearchBar } from "../shared/components/SearchBar";

interface LeadSearchProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

export function LeadSearch(props: LeadSearchProps) {
  return (
    <SearchBar
      {...props}
      placeholder={props.placeholder ?? "Search leads..."}
    />
  );
}