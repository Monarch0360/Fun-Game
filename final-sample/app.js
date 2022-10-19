var selectedTileSrc = null
var selectedTileId = null

document.querySelectorAll('.main-tile').forEach((img) => {
    img.onclick = () => {
        console.log(img.src)
        let mainTiles = document.querySelectorAll('.main-tile');
        for (let i = 0; i < mainTiles.length; i++) {
            mainTiles[i].classList.add('borderClass');
            mainTiles[i].classList.remove('selectedTile')
        }
        if (!selectedTileSrc) {

            let tiles = document.querySelectorAll('.tile');
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].classList.add('borderClass');
            }
        }

        let element = document.getElementById(img.id)
        element.classList.add('selectedTile')
        element.classList.remove('borderClass')
        selectedTileSrc = img.src
        selectedTileId = img.id

    }
})

document.querySelectorAll('.tile').forEach((div) => {
    div.onclick = () => {
        div.innerHTML = ''
        if (selectedTileSrc && selectedTileId !== 'remove') {
            var img = document.createElement('img');
            img.id = `image${div.id}`
            img.src = selectedTileSrc;
            document.getElementById(div.id).appendChild(img);
        }
    }
})

document.getElementById("create-map").addEventListener("click", function () {
    document.querySelectorAll('.tile').forEach((div) => {
        div.innerHTML = ''
    })
});