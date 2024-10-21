export const MockGameList = async (succeed: boolean, data: any[]) => {1
    return await new Promise((resolve) => {
        setTimeout(()=>{
            if(succeed) {
                resolve({
                    status: "200",
                    messages: {
                        code: 0,
                        message:  "Data Fetch Successfully"
                    },
                    data
                })
            }
        }, 3000)
    })
}