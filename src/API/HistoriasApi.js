const url = "https://repositoriohistoria.onrender.com/historia/";

export async function getListarHistorias(){
    const res = await fetch(url);
    const data = await res.json();
    return data.historias;
}

export async function agregarHistoria(historia){
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(historia)
    });
    const data = await res.json();
    return data;
}

export async function actualizarHistoria(historia){
    const res = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(historia)
    });
    const data = await res.json();
    return data;
}

export async function eliminarHistoria(id){
    const res = await fetch(url + "${id}", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    return data;
}