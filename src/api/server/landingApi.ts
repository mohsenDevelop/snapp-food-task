import { BASE_API_URL } from '@config/urls';

export const getVendorList = async ({ page }: { page: number }) => {

    const res = await fetch(
        `${BASE_API_URL}/mobile/v3/restaurant/vendors-list?page=${page}&page_size=10&lat=35.754&long=51.328`,
        { next: { revalidate: 1 } }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};