import { useEffect, useState } from "react";
import CommentServices, { CommentData } from "../services/CommentServices";
import { CanceledError } from "../services/apiClient";

const useUsers = () => {
    const [comments, setComments] = useState<CommentData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const { request, cancel } = CommentServices.getAll<CommentData>();

    request
      .then((res) => {
        setComments(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return {comments, setComments, error, setError, isLoading}
}

export default useUsers;