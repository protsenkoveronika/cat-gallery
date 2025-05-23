export async function fetchCats(limit = 6) {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
    if (!response.ok) throw new Error("Failed to fetch cats");
    return await response.json();
}
