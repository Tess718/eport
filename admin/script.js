let noti_drop = document.querySelectorAll('#noti_drop');
let noti_space = document.querySelectorAll('#noti_space');  
let n_inner = document.querySelectorAll('.n_inner');
let close_n = document.querySelectorAll('#close_n');
let shadow = document.querySelectorAll('.shadow');

// Loop through noti_drop elements
noti_drop.forEach((drop, index) => {
    drop.onclick = () => {
        console.log('clicked');

        // Assuming noti_space, n_inner, and shadow at the same index correspond to each other
        let space = noti_space[index];
        let inner = n_inner[index];
        let sh = shadow[index];

        if (space.style.height === '500px') {
            inner.style.display = "none";
            space.style.height = '0px';
            sh.style.display = "none";
        } else {
            space.style.height = '500px';
            inner.style.display = "block";
            sh.style.display = "block";
        }

        // Close button functionality
        close_n.forEach(eachClose => {
            eachClose.onclick = () => {
                inner.style.display = "none";
                space.style.height = '0px';
                sh.style.display = "none";
            };
        });
    };
});

// Loop through shadow elements to handle the click event for closing
shadow.forEach((sh, index) => {
    sh.onclick = () => {
        let inner = n_inner[index];
        let space = noti_space[index];

        inner.style.display = "none";
        space.style.height = '0px';
        sh.style.display = "none";
    };
});
