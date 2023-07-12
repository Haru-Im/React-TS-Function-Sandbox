import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createContext, FC, ReactNode } from "react";

export interface IReactQueryContext {}

export const ReactQueryContext = createContext<IReactQueryContext | null>(null);

type IReactQueryProviderProps = {
  children: ReactNode;
};

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // focus-out 되었을때 리렌더방지
      refetchOnWindowFocus: false,
    },
  },
});

export const ReactQueryProvider: FC<IReactQueryProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
