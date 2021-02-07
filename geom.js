

let B = Number(document.getElementById('input1').value)
let C = Number(document.getElementById('input2').value)
let x1
let x2
let D

let vm = new Vue({
    el: "#plot",
    data: {
        D: 0,
        x1: 0,
        x2: 0,
        B: -1,
        C: 0.25,


    },
    computed: {
        
        discriminant: function q() {
            this.D = Math.pow(this.B, 2) - 4 * this.C
            return this.D
        },
        roots: function w() {
            
            if ( this.D > 0) {
                this.x1 = (-this.B - Math.sqrt(this.D)) / 2
                this.x2 = (-this.B + Math.sqrt(this.D)) / 2
                return "x1 = " +  this.x1 + " x2 = " +  this.x2

            } else if (this.D < 0) {
                
                return  " нет корней "

            } else {
                this.x1 = -(this.B / 2)
                
                return  "x = " +  this.x1
            }

}
        }


    }

})


functionPlot({
    target: "#plot",
    data: [{
        fn: "x^2 + (b) * x + (c)",
        scope: {
            b: B,
            c: C,

        },
    },
    ],
    grid: true,
})