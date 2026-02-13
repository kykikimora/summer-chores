function mowYard(name, onComplete) {
    setTimeout(() => {

            console.log(`${name} mowed the yard.`);
            if (typeof onComplete === "function") {
                onComplete();
            }    
    }, 2000);
}


function weedEat(name, onComplete) {
    setTimeout(() => {

        let completed = Math.random() > 0.3;

        if (completed) {
            console.log(`${name} finished using the weed eater.`);
            if (typeof onComplete === "function") {
                onComplete();
            }    
        } else {
            console.log(`${name} fell asleep after mowing the yard.`)
        }
    }, 1500);
}

function trimHedges(name, onComplete) {
    setTimeout(() => {

        let completed = Math.random() > 0.3;

        if (completed) {
            console.log(`${name} finished trimming the hedges.`);
            if (typeof onComplete === "function") {
                onComplete();
            }    
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`)
        }
    }, 1000);
}

function collectWood(name, onComplete) {
    setTimeout(() => {

        let completed = Math.random() > 0.3;

        if (completed) {
            console.log(`${name} finished collecting wood.`);
            if (typeof onComplete === "function") {
                onComplete();
            }    
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`)
        }
    }, 2500);
}

function waterGarden(name, onComplete) {
    setTimeout(() => {

        let completed = Math.random() > 0.3;

        if (completed) {
            console.log(`${name} finished watering the garden.`);
            if (typeof onComplete === "function") {
                onComplete();
            }    
        } else {
            console.log(`${name} fell asleep after collecting wood.`)
        }
    }, 500);
}

function doSummerChores(name) {
    if (typeof name !== "string") {
        console.log("Name must be a string.");
        return;
    }

    mowYard(name, function() {
        weedEat(name, function() {
            trimHedges(name, function () {
                collectWood(name, function() {
                    waterGarden(name, function () {
                        console.log(`${name} finished all their chores!`);
                    });
                });
            });
        });
    });
}