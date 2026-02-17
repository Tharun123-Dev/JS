function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("boiling the water");
            resolve();
        }, 5000);
    });
}

function addingMasala() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("adding masala");
            resolve();
        }, 2000);
    });
}

function addExtraIngre() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("add some extra ingredients");
            resolve();
        }, 2000);
    });
}

function serve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("serving");
            resolve();
        }, 2000);
    });
}

// Senior clean flow
boilWater()
    .then(addingMasala)
    .then(addExtraIngre)
    .then(serve)
    .catch(() => console.log("Something went wrong"));
