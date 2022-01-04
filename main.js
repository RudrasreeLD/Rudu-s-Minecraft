var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_height = 30;
block_image_width = 30;

player_image = "";
block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_image = Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set
            ({
                top: player_y, left: player_x

            });
        canvas.add(player_image);
    }
    )
}

function block_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image = Img;
        block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_height);
        block_image.set
            ({
                top: player_y, left: player_x

            });
        canvas.add(block_image);
    }
    )
}

window.addEventListener("keydown", cocomelon);
function cocomelon(e) {
    v1 = e.keyCode;

    if (e.shiftKey == true && v1 == '80') {
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("ch").innerHTML = block_image_height;
        document.getElementById("cw").innerHTML = block_image_width;
    }

    if (e.shiftKey == true && v1 == '77') {
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("ch").innerHTML = block_image_height;
        document.getElementById("cw").innerHTML = block_image_width;
    }

    if (v1 == '37') {
        left();
        console.log("left arrow key is pressed");
    }

    if (v1 == '38') {
        up();
        console.log("up arrow key is pressed");
    }

    if (v1 == '39') {
        right();
        console.log("right arrow key is pressed");
    }

    if (v1 == '40') {
        down();
        console.log("down arrow key is pressed");
    }

    if (v1 == '67') {
        block_update("cloud.jpg");
        console.log("c key is pressed");
    }

    if (v1 == '68') {
        block_update("dark_green.png");
        console.log("d key is pressed");
    }

    if (v1 == '71') {
        block_update("ground.png");
        console.log("g key is pressed");
    }

    if (v1 == '76') {
        block_update("light_green.png");
        console.log("l key is pressed");
    }

    if (v1 == '82') {
        block_update("roof.jpg");
        console.log("r key is pressed");
    }

    if (v1 == '84') {
        block_update("trunk.jpg");
        console.log("t key is pressed");
    }

    if (v1 == '85') {
        block_update("unique.png");
        console.log("u key is pressed");
    }

    if (v1 == '87') {
        block_update("wall.jpg");
        console.log("w key is pressed");
    }

    if (v1 == '89') {
        block_update("yellow_wall.png");
        console.log("y key is pressed");
    }

    if (v1 == '83') {
        block_update("sword.png");
        console.log("s key is pressed");
    }

    if (v1 == '65') {
        block_update("golden_apple.png");
        console.log("a key is pressed");
    }

    if (v1 == '73') {
        block_update("diamond.png");
        console.log("i key is pressed");
    }

    if (v1 == '80') {
        block_update("pickaxe.png");
        console.log("p key is pressed");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block image height is = " + block_image_height);
        console.log("When up arrow key is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_image);
        player_update();
    }
}

function down() {
    if (player_y <= 460) {
        player_y = player_y + block_image_height;
        console.log("block image height is = " + block_image_height);
        console.log("When down arrow key is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_image);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("block image height is = " + block_image_width);
        console.log("When left arrow key is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_image);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("block image height is = " + block_image_width);
        console.log("When right arrow key is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_image);
        player_update();
    }
}