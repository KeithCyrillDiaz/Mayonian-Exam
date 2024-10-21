
import { data, responseType } from "../lib/MockData"


export const MockGameList = async (succeed: boolean): Promise<responseType> => {1
    return await new Promise<responseType>((resolve, reject) => {
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
            } else {
                alert("Failed Fetching Data")
                reject({
                    status: "401",
                    messages: {
                        code: 1,
                        message: "Failed Fetching Data"
                    },
                    data: []
                })
            }
        }, 300)
    })
}