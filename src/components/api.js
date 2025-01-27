// API utility for fetching bags
export async function fetchBags() {
    const response = await fetch('/http://127.0.0.1:5555/bags');
    const data = await response.json();
    return data;
}
// API utility for fetching items (bags or t-shirts)
export async function fetchItemsByInspiration(type, inspiration) {
    const response = await fetch(`http://127.0.0.1:5555/${type}/inspiration/${inspiration}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${type}`);
    }
    return await response.json();
}

