let permissions

onDOMContentLoaded = (event) => 

{
    if (document.readyState === 'complete')
    {
        let token = sessionStorage.getItem("token")
        if(!token)
            window.location.href = "/login"
        else{
            permissions = validateToken(token)
            if(!permissions){
                sessionStorage.removeItem("token")
                window.location.href = "/login"
            }
            if(permissions != "Administrador")
                window.location.href = ""
        }
    }
};

window.onload = function(){
    changeMode()

    var sidebar = document.getElementsByClassName("sidebarName").item(0)

    var SalvarAlteracaoComp = document.createElement("custom-button")
    SalvarAlteracaoComp.setAttribute("redirect","/")
    SalvarAlteracaoComp.setAttribute("labelName","Salvar")
    SalvarAlteracaoComp.classList.add("save-button")
    SalvarAlteracaoComp.classList.add("color-white")

    sidebar.appendChild(SalvarAlteracaoComp)

}