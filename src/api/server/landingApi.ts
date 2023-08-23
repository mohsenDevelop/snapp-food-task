export const getVendorList = async () => {

    const res = await fetch(
        'https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=1&page_size=10&lat=35.754&long=51.328',
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};