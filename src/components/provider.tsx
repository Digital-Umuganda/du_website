"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Compnents
import { Toaster } from "./ui/toaster";

export function Provider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Toaster />
      {children}
    </QueryClientProvider>
  );
}
