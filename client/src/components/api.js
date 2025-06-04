// API utility for fetching bags
export async function fetchBags() {
    const response = await fetch('/https://skeepsserver.onrender.com/bags');
    const data = await response.json();
    return data;
}
// API utility for fetching items (bags or t-shirts)
export async function fetchItemsByInspiration(type, inspiration) {
    const response = await fetch(`https://skeepsserver.onrender.com/${type}/inspiration/${inspiration}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${type}`);
    }
    return await response.json();
}

