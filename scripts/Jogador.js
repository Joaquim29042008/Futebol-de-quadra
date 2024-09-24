class Cpu {
    constructor(c, bola) {
        this.c = c;
        this.bola = bola;
        this.x = 0;
        this.y = c.canvas.height - 150;
        this.velX = 0.1;
        this.velY = 0.1;
        this.gravidade = 1;
        this.velocidadePulo = 15;
        this.chao = false;
        

        this.sonic = new Image();
        this.sonic.src = "assets/sonic.png";
        this.sonic.width = 150;
        this.sonic.height = 150;
    }

    management() {
        // esquerda
        if (this.keyboard.esquerda && this.x > 0) {
            this.x -= this.velX;
        }
        // direita
        if (this.keyboard.direita && this.x < this.c.canvas.width - this.sonic.width) {
            this.x += this.velX;
        }
        // pular
        if (this.keyboard.pulo) {
            this.y -= this.velocidadePulo;
            
        }
        // cima
        if (this.keyboard.cima) {
            if (this.y > 0)
                this.y -= this.velY;
        }
        //baixo
        if (this.keyboard.baixo) {
            if (this.y < this.c.canvas.height - this.sonic.height)
                this.y += this.velY;
        }

        this.velY += this.gravidade;
        this.y += this.velY;

        if (this.y > this.c.canvas.height - this.sonic.height) {
            this.y = this.c.canvas.height - this.sonic.height;
            this.chao = true;
            this.velY = 0;
        }
    }

    draw() {
        this.c.clearRect(0, 0, this.c.canvas.width, this.c.canvas.height);
        this.management();
        this.c.drawImage(this.sonic, this.x, this.y, this.sonic.width, this.sonic.height);
        requestAnimationFrame(() => this.draw());
    }
}