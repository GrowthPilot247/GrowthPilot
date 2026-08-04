"use client";

import { SearchBar } from "../shared/components/SearchBar";

interface OpportunitySearchProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

export function OpportunitySearch(
  props: OpportunitySearchProps
) {
  return (
    <SearchBar
      {...props}
      placeholder={
        props.placeholder ?? "Search opportunities..."
      }
    />
  );
}