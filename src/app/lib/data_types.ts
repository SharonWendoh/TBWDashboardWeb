interface PaginatedCakesResponse {
    data: CakeFlavour[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

interface CakeFlavour {
    id: number;
    flavor: string;
    price_1kg: string | null;
    price_1_5kg: string | null;
    price_2kg: string | null;
    price_2_5kg: string | null;
    price_3kg: string | null;
    price_3_5kg: string | null;
    price_4kg: string | null;
    price_4_5kg: string | null;
    price_per_kg: string | null;
}

interface PaginatedOrdersResponse {
    data: Orders[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

interface Orders {
    order_id: number;
    name: string;
    flavour: string;
    size: number;
    date: string;
    status: 'Booked' | 'Confirmed' | 'In progress' | 'Completed';
    time: string;
    total: number;
    contact: string;
    attendant: string;
    deposit: number;
    balance: number;
    delivery_location: string;
    additional_description?: string;
    image?: string | null; 
}

