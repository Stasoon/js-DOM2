let page = 1;

export async function loadImages(count = 5) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${count}`);
    const data = await response.json();
    page++;
    return data;
}