function procesarCompra() {
                var planSeleccionado = document.querySelector('input[name="plan"]:checked');
                var metodoPago = document.getElementById("metodoPago").value;

                if (planSeleccionado) {
                    var plan = planSeleccionado.value;
                    var confirmacion = document.getElementById("confirmacion");
                    confirmacion.innerHTML = "Plan seleccionado: " + plan + "<br>Método de pago: " + metodoPago;
                } else {
                    alert("Por favor, selecciona un plan antes de continuar.");
                }
            }


