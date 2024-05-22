const url = "https://repositoriohistoria.onrender.com/historia";

export async function getListarHistorias(){
    const res = await fetch(url + "/GetAll");
    const data = await res.json();
    return data;
}

export async function agregarHistoria(historia){
    const res = await fetch(url + "/Create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(historia)
    });
    const data = await res.json();
    return data;
}

export async function actualizarHistoria(historia){
    console.log("entro a actualizar historia");
    const res = await fetch(url + "/Update/${historia._id}", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(historia)
    });
    const data = await res.json();
    return data;
}

export async function eliminarHistoria(id){
    const res = await fetch(url + "/Delete/ +${id}", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    return data;
}

//---------------------------------------------------------
const urlUsuarios = "https://usuariosg6.onrender.com/usuarios";

export async function getUsuarios(){
    const res = await fetch(urlUsuarios + "/GetAll");
    const data = await res.json();
    return data;
}

//---------------------------------------------------------
const urlAgenda = "https://e191be2024g3.onrender.com/agenda";

export async function getAgendas(){
    const res = await fetch(urlAgenda + "/GetAll");
    const data = await res.json();
    return data;
}

//---------------------------------------------------------
const urlCitas = "https://e191be2024g4-prod.onrender.com/citas";

export async function getCitas(){
    const res = await fetch(urlCitas + "/GetAll");
    const data = await res.json();
    return data;
}

//---------------------------------------------------------
const urlOrdenesExamenes = "https://ordenes-1.onrender.com/ordenesExamen";

export async function getOrdenesExamenes(){
    const res = await fetch(urlOrdenesExamenes + "/GetAll");
    const data = await res.json();
    return data;
}

//---------------------------------------------------------
const urlOrdenesIncapacidades = "https://ordenes-1.onrender.com/ordenesIncapacidad";

export async function getOrdenesIncapacidades(){
    const res = await fetch(urlOrdenesIncapacidades + "/GetAll");
    const data = await res.json();
    return data;
}

//---------------------------------------------------------
const urlOrdenesProcedimientos = "https://ordenes-1.onrender.com/ordenesProcedimiento";

export async function getOrdenesProcedimientos(){
    const res = await fetch(urlOrdenesProcedimientos + "/GetAll");
    const data = await res.json();
    return data;
}

//---------------------------------------------------------
const urlOrdenesMedicamentos = "https://ordenes-1.onrender.com/ordenesMedicamento";

export async function getOrdenesMedicamentos(){
    const res = await fetch(urlOrdenesMedicamentos + "/GetAll");
    const data = await res.json();
    return data;
}

//---------------------------------------------------------
const urlOrdenesRemisiones = "https://ordenes-1.onrender.com/ordenesRemision";

export async function getOrdenesRemisiones(){
    const res = await fetch(urlOrdenesRemisiones + "/GetAll");
    const data = await res.json();
    return data;
}