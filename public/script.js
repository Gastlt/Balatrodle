

let postVal;
let getVal;

document.getElementById("submitPost").onclick = async function(){
    postVal = document.getElementById("post").value;
    console.log(postVal);
    document.getElementById("testHeader").textContent = postVal
    try {
        const response = await fetch ("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json "
            },
            body: JSON.stringify({ post:postVal })
        });

        const data = await response.json();
        console.log("Respuesta:", data);
    } catch (error) {
        console.error("Error:". error);
    }
};

document.getElementById("submitGet").onclick = async function(){
    getVal = document.getElementById("get").value;
    console.log(getVal);
    
    try {
        const response = await fetch(`/api/posts/${encodeURIComponent(getVal)}`);
        const data = await response.json();
        const arr = data.posts
        const count = arr[0]["count(1)"];
        if(count == 0){
            document.getElementById("found").textContent = "false";
        } else document.getElementById("found").textContent = "true";
    } catch (error) {
        console.error("Error al buscar el post:", error);
        document.getElementById("found").textContent = "Error"; 
    } 
};