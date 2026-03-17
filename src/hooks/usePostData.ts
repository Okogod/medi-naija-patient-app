import { useMutation } from "@tanstack/react-query";

import { PostData } from "../utils/functions/DataService";


export const usePostData = (url: string ) => {
    return useMutation({
        mutationFn: (data: {}) => PostData(url, data),

        onError: (error: any) => {
            throw new Error("Error:", error.message);
        },
    });
};