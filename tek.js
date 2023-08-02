        const container = document.querySelector('.container');
        let colorInput = document.querySelector('#color');
        let hexInput = document.querySelector('#hex');
        let mouseDown = false;
        let size = 16;
            
            


        function changeColor(e) {
            if (mouseDown) {
                e.target.style.backgroundColor = colorInput.value;
            }
        }

        function fill() {
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => cell.style.backgroundColor = colorInput.value);
        }

        function pencil() {
            function changeColor(e) {
            if (mouseDown) {
                e.target.style.backgroundColor = colorInput.value;
            }
        }
            const rows = document.querySelectorAll('.row');
            rows.forEach(row => row.addEventListener("mousedown", () => mouseDown = true));
            rows.forEach(row => row.addEventListener("mouseup", () => mouseDown = false));
            rows.forEach(row => row.addEventListener("mouseover", changeColor));
        }

        function eraser() {
            function changeEraser(e) {
                if (mouseDown) {
                    e.target.style.backgroundColor = "white";
                }
            }
            const rows = document.querySelectorAll('.row');
            rows.forEach(row => row.addEventListener("mousedown", () => mouseDown = true));
            rows.forEach(row => row.addEventListener("mouseup", () => mouseDown = false));
            rows.forEach(row => row.addEventListener("mouseover", changeEraser));
        }

        function clearGrid() {
            const rows = document.querySelectorAll('.row');
            rows.forEach(row => row.remove());
            size = document.getElementById('textInput').value;
            grid(size);
        }

        function getSize(size){
            const value = document.getElementById('textInput').value=size;
            grid(size);
            clearGrid();
        }
  

        function grid(size) {
            let dim = 700 / size;
            for (let i = 0; i < size; i++) {
                let row = document.createElement('div');
                row.classList.add('row');
                row.style.height = `${dim}px`;
                row.style.width = `${dim}px`;
                container.appendChild(row);
                for (let j = 0; j < size; j++) {
                    let cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.style.width = `${dim}px`;
                    cell.style.height = `${dim}px`;
                    row.appendChild(cell);
                }
                const rows = document.querySelectorAll('.row');
                rows.forEach(row => row.addEventListener("mousedown", () => mouseDown = true));
                rows.forEach(row => row.addEventListener("mouseup", () => mouseDown = false));
                rows.forEach(row => row.addEventListener("mouseover", changeColor));
            }

        }
      
        grid(size);
        