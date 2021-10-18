class myCircle{
    constructor(x,y,size,color){
        this.x=x
        this.y=y
        this.size=size
        this.color=color
    }

    render(){
        console.log(12)
        fill(this.color)
        circle(this.x,this.y,this.size)
    }
    update(){

    }
}