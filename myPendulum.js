class myPendulum{
    constructor(x,y,angle,swingR,size,color){
        this.lx=x
        this.ly=y
        
        this.angle = angle
        this.gravity = 0.5
        this.damping = 0.9995
        this.velocity = 0
        this.acceleration = 0
        this.swingR = swingR
        this.size=size
        this.color=color
        this.update()
    }

    render(){

        fill(this.color)
        this.drawCircle()
        this.drawLine()
    }
    drawCircle(){
        circle(this.cx,this.cy,this.size)

    }
    drawLine(){
        stroke(255)
        line(this.lx,this.ly,this.cx,this.cy)
        noStroke()
    }
    update(){
        this.updateAngle()
        this.updatePos()
    }
    updatePos(){
        this.cx = this.lx + sin(this.angle)*this.swingR
        this.cy = this.ly + cos(this.angle)*this.swingR
    }
    updateAngle(){
        this.acceleration = -1*this.gravity/this.size * sin(this.angle)
        this.velocity += this.acceleration
        this.velocity *=this.damping
        this.damping -= 0.00001
        this.angle += this.velocity

    }
}