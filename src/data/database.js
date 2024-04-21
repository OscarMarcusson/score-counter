const db = {};

export async function getData(key) {
    const data = db[key];
    if (data)
        return data;

    const url = `/data/${key}.json`;
    const newData = await fetch(url);
    const json = await newData.json();
    console.warn(json);
    db[key] = json;
    return json;
}