import { client } from "@/lib/hono-rpc";
import { useQuery } from "@tanstack/react-query";

//  是 fetch，不是 axios， 没有 try catch
// 请求很多，不需要 error
export const useCurrent = () => {
  const query = useQuery({
    queryKey: ["current"],
    queryFn: async () => {
      const response = await client.api.auth.current.$get();
      if (!response.ok) {
        return { error: "Failed to get current user" };
      }
      const { data } = await response.json();
      return data;
    },
  });
  return query;
};
