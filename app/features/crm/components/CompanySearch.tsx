"use client";

import { SearchBar } from "../shared/components/SearchBar";

interface CompanySearchProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

export function CompanySearch(props: CompanySearchProps) {
  return (
    <SearchBar
      {...props}
      placeholder={props.placeholder ?? "Search companies..."}
    />
  );
}