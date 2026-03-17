export const PostData = async (url: string, data: {}) => {

    try {

        const res = await (fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }));

        const response = (await res).json();

        return (await response);

    }catch( error: any ){

        throw new Error(error);

    }

    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then( res => res.json())
    // .then( data => {
    //     // console.log("Fetch-Res:", data);
    //     return data;
    // }).catch( ( error ) => {
    //     console.error( error )
    //     throw new Error(error);
    // } )


}

