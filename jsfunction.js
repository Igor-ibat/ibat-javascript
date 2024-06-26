<script>
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var result = document.querySelector('span')

    function sum() {
        result.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    }

     function sub() {
        result.innerHTML = parseInt(n1.value) - parseInt(n2.value)
    }

     function mult() {
        result.innerHTML = parseInt(n1.value) * parseInt(n2.value)
    }

     function div() {
        result.innerHTML = parseInt(n1.value) / parseInt(n2.value)
    }

    function sum() {
        result.innerHTML = n1.value + n2.value
    }
    
    function sub() {
        result.innerHTML = n1.value - n2.value
    }

    function mult() {
        result.innerHTML = n1.value * n2.value
    }

    function mult() {
        result.innerHTML = n1.value / n2.value
    }

</script>