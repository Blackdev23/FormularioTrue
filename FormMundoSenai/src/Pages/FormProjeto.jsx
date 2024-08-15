import * as C from "@chakra-ui/react"

function FormProjeto(){
    return(
        <C.VStack>
            <h2>Cadastro - Projeto</h2>
            <C.Input type="text" placeholder="Digite o seu Projeto" id="projetoAluno"/>
            <C.Input type="text" placeholder="Digite a sua área" id="areaAluno"/>
            <C.Input type="text" placeholder="Digite o seu coordenador" id="coordenadorAluno"/>
            <C.Select  placeholder='Selecione a Unidade'>
            <option>CETICC</option>
            <option>CETCC</option>
            <option>CETAF-AJU</option>
            <option>CETAF-EST</option>
            </C.Select>
        </C.VStack>
    )
}


export default FormProjeto