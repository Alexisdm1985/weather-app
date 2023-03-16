export const weatherFetch = (url)=> {

    return (
        fetch(url)
            .then( (resp) => resp.json())
            .then( (apiData) => {
                return apiData
        })
    )
};