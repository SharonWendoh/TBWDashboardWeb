"use client"
import NewOrderIcon from "@/app/components/icons/new-order-icon";
import MenuTable from "@/app/components/tables/menu-table";
import OrdersTable from "@/app/components/tables/orders-table";
import { useEffect, useState } from "react";

export default function Page(){
    const [cakes, setCakes] = useState<CakeFlavour[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCakes() {
            setLoading(true); // Set loading to true when fetching data
            setError(null); // Clear previous errors

            try{
                const response = await fetch('/api/cakes')
                const data = await response.json();
                setCakes(data);
                
            
            } catch (error) {
                console.error('Failed to fetch cakes', error);
                setLoading(false);
            }
    
        }
        fetchCakes();
    },[])
    //console.log(cakes)
    return (
        <div>
            <NewOrderIcon />
            <MenuTable data={cakes}/>
        </div>
        
    )
}