import { useEffect, useState } from "react";
import { getReadBookItems } from "../../Utility/LocalStorage";
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from "react-router-dom";


const PagetoRread = () => {

    const allBooks = useLoaderData();
    const [data, setReadData] = useState([]);
    useEffect(()=>{
        const readLocalStr = getReadBookItems();
        if(readLocalStr.length > 0){
            const readBooks = allBooks.filter(book => readLocalStr.includes(book.bookId));
            setReadData(readBooks);
        }
    }, []);
    console.log(data)
    // const data = [
    //     {name: "Page A","uv": 4000, "pv": 2400},
    //     {
    //       name: "Page B",
    //       "uv": 3000,
    //       "pv": 1398
    //     },
    //     {
    //       name: "Page C",
    //       "uv": 2000,
    //       "pv": 9800
    //     },
    //     {
    //       name: "Page D",
    //       uv: 2780,
    //       "pv": 3908
    //     },
    //     {
    //       name: "Page E",
    //       "uv": 1890,
    //       "pv": 4800
    //     },
    //     {
    //       name: "Page F",
    //       "uv": 2390,
    //       "pv": 3800
    //     },
    //     {
    //       name: "Page G",
    //       "uv": 3490,
    //       "pv": 4300
    //     }
    //   ]

    return (
      <div className="my-20">
            <BarChart width={730} height={450} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalPages" fill="#8884d8" />
            </BarChart>
            <ResponsiveContainer />
      </div>
    );
};

export default PagetoRread;