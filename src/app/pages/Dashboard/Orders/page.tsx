"use client"
import NewOrderIcon from "@/app/components/icons/new-order-icon";
import OrdersTable from "@/app/components/tables/orders-table";
import { useEffect, useState } from "react";

export default function Page(){
    const [orders, setOrders] = useState<PaginatedOrdersResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [totalCount, setTotalCount] = useState(0);
    
    useEffect(() => {
        async function fetchOrders() {
            setLoading(true); // Set loading to true when fetching data
            setError(null); // Clear previous errors
            try{
                const response = await fetch(`/api/orders?page=${page +1}&limit=${limit}`)
                const data = await response.json();
                setOrders(data);
                setTotalCount(data.totalItems)
                setPage(data.currentPage -1)
                setLoading(false);
                
            
            } catch (error) {
                console.error('Failed to fetch orders', error);
                setLoading(false);
            }
    
        }
        fetchOrders();
    },[page, limit])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
    };
    return (
        <div>
            <NewOrderIcon />
            <OrdersTable 
            data={orders?.data ?? []} // Use an empty array if cakes?.data is undefined
            page={page}
            limit={limit}
            totalCount={totalCount}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
        
    )
}