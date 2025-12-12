import { Validate } from "./Validate.js";
import { Requests } from "./Requests.js";

const precadastro = document.getElementById('precadastro');

const Login = document.getElementById('Login');

$('#cpf').inputmask({ "mask": ["999.999.999-99"] });
$('#celular').inputmask({ "mask": ["(99) 99999-9999"] });
$('#whatsapp').inputmask({ "mask": ["(99) 99999-9999"] });
$('#rg').inputmask({ "mask": ["99999"] });

precadastro.addEventListener('click', async () => {
    try {
        const response = await Requests.SetForm('form').Post('/login/precadastro');
        if (!response.status) {
            Swal.fire({
                title: "Atenção!",
                text: response.msg,
                icon: "error",
                timer: 3000
            });
            return;
        }
        Swal.fire({
            title: "Sucesso!",
            text: response.msg,
            icon: "success",
            timer: 3000
        });
        $('#pre-cadastro').modal('hide');
    } catch (error) {
        console.log(error);
    }
});
Login.addEventListener('click', async () => {
    try {
        const response = await Requests.SetForm('form').Post('/login/autenticar');
        if (!response.status) {
            Swal.fire({
                title: "Atenção!",
                text: response.msg,
                icon: "error",
                timer: 3000
            });
            return;
        }
        Swal.fire({
            title: "Sucesso!",
            text: response.msg,
            icon: "success",
            timer: 2000
        }).then(() => {
            window.location.href = '/';
        });
    } catch (error) {
        console.log(error);
    }
});