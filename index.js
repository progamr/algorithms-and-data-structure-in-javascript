document.getElementById("button").addEventListener("click", () => {
    const algName = document.getElementById("algName").value;
    algScript = import(`./algorithms/${algName}.js`);
    algScript.then((alg) => {
        // alg.default();
    }).catch((err) => {
        alert(err);
    });
});
