export const GetHistory =
    async (): Promise<any>  => {
        const data = await fetch('/api/history')
            .then((response) => { return response.json(); });
 
        return data;
    }
