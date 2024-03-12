import React, { useEffect } from 'react'

const PokeData = ({children}) => {

    const [pokeData,setPokeData] = useState();

    const fetchData = async () => {
        let url = ""
        try{
            let res = await axios.get(url)
            let data = res.data
            setPokeData(data)
            console.log(data)
        }catch(err){
            console.log("Something went wrong",err)
        }
    }

    useEffect(() => {
        fetchData()
    })

  return <>{children(pokeData)}</>
}

export default PokeData;