class Pad {
    constructor(c, keyboard) {
        this.c = c;
        this.keyboard = keyboard;
        this.x = 5;
        this.largura = 20;
        this.altura = 100;
        this.y = (this.c.canvas.height/2)-(this.altura/2);
        this.vel = 5;
       
        this.arrasca = new Image ();
        this.arrasca.width = 100;
        this.arrasca.height = 100;
        this.arrasca.src = "assets/arrasca.png";
        this.arrasca.addEventListener('load', () => {
            this.draw()
        });
    }




    management() {
        if (this.keyboard.cima)
            if (this.y > 0 && this.y -5)
                this.y -= this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height - this.altura)
                this.y += this.vel;
        
    }


    draw() {
        this.management();
        this.c.drawImage(this.arrasca, -20, this.y, this.arrasca.width, this.arrasca.height);
        //this.c.fillRect(this.x, this.y, this.largura, this.altura);
        
        
    }
}