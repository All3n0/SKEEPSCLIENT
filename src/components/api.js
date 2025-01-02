// API utility for fetching bags
export async function fetchBags() {
    const response = await fetch('/http://127.0.0.1:5555/bags');
    const data = await response.json();
    return data;
}
export const fetchBagsByInspiration = async (inspiration) => {
    try {
        const response = await fetch(`http://127.0.0.1:5555/bags/inspiration/${inspiration}`);
        if (!response.ok) {
            throw new Error('Failed to fetch bags');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};
